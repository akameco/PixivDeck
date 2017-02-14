import {fork, take, call, select, put} from 'redux-saga/effects'
import * as Actions from '../constants/column'
import * as endpoint from '../constants/endpoint'
import {getColumn} from '../reducers'
import type {Endpoint, Params, ColumnType} from '../types/column'
import {
	apiRequestSuccess,
	addColumnIllusts,
	setPrams,
} from '../actions'
import Api from '../api'
import {autoLogin} from './auth'

type Id = number

const resetParam = {offset: 0, maxBookmarkId: null}

export function * refreshAllColumns() {
	const columns: Array<ColumnType> = yield select(state => state.columns)
	for (const {id} of columns) {
		yield call(checkUpdate, id)
	}
}

function * add(id: Id, endpoint: Endpoint, inputParams: Params) {
	try {
		const {response, params} = yield call(Api.fetch, endpoint, inputParams)
		yield put(apiRequestSuccess(response))
		yield put(addColumnIllusts(id, response.result))
		return {response, params}
	} catch (err) {
		console.error(err)
	}
}

const checkEndpoint = (target: Endpoint) => target === endpoint.FOLLOW || target === endpoint.FOLLOW

function * checkUpdate(id: Id) {
	const state = yield select()
	const column = getColumn(state, id)

	if (checkEndpoint(column.endpoint)) {
		const isLogin = yield call(autoLogin)
		if (!isLogin) {
			return false
		}
	}

	const opts = {...column.params, ...resetParam}
	yield call(add, id, column.endpoint, opts)
}

function * fetchColumn(id: Id) {
	const state = yield select()
	const column = getColumn(state, id)

	if (checkEndpoint(column.endpoint)) {
		const isLogin = yield call(autoLogin)
		if (!isLogin) {
			return false
		}
	}

	const {params} = yield call(add, id, column.endpoint, column.params)

	if (params) {
		yield put(setPrams(id, params))
	}
}

function * checkUpdateFlow() {
	while (true) {
		const {id} = yield take(Actions.CHECK_COLUMN_UPDATE)
		yield fork(checkUpdate, id)
	}
}

function * fetchColumnFlow() {
	while (true) {
		const {id} = yield take(Actions.FETCH_COLUMN)
		yield fork(fetchColumn, id)
	}
}

function * refreshAllColumnsFlow() {
	while (true) {
		yield take(Actions.REFRESH_ALL_COLUMNS)
		yield fork(refreshAllColumns)
	}
}

function * root() {
	yield fork(checkUpdateFlow)
	yield fork(refreshAllColumnsFlow)
	yield fork(fetchColumnFlow)
}

export default root
