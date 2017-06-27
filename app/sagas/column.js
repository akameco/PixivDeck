// @flow
// eslint-disable-next-line import/order
import {
  fork,
  take,
  call,
  select,
  put,
  type IOEffect,
} from 'redux-saga/effects'
import * as Actions from 'constants/column'
import * as endpoint from 'constants/endpoint'
import { getColumn } from 'reducers'
import type { Endpoint, Params, ColumnType } from 'types/column'
import { apiRequestSuccess, addColumnIllusts, setPrams } from 'actions'
import Api from '../api'
import { autoLogin } from './auth'

const resetParam = { offset: 0, maxBookmarkId: null }

export function* refreshAllColumns(): Generator<IOEffect, void, *> {
  // $FlowFixMe
  const columns: Array<ColumnType> = yield select(state => state.columns)
  for (const { id } of columns) {
    yield call(checkUpdate, id)
  }
}

// eslint-disable-next-line
function* add(
  id: string,
  endpoint: Endpoint,
  inputParams: Params
): Generator<IOEffect, *, *> {
  try {
    const { response, params } = yield call(Api.fetch, endpoint, inputParams)
    yield put(apiRequestSuccess(response))
    yield put(addColumnIllusts(id, response.result))
    return { response, params }
  } catch (err) {
    console.error(err)
  }
}

const checkEndpoint = (target: Endpoint) =>
  target === endpoint.FOLLOW || target === endpoint.FOLLOW

// eslint-disable-next-line
function* checkUpdate(id: string): Generator<IOEffect, void | boolean, *> {
  const state = yield select()
  const column = getColumn(state, id)

  if (checkEndpoint(column.endpoint)) {
    const isLogin = yield call(autoLogin)
    if (!isLogin) {
      return false
    }
  }

  const opts = { ...column.params, ...resetParam }
  yield call(add, id, column.endpoint, opts)
}

// eslint-disable-next-line
function* fetchColumn(id: string): Generator<IOEffect, void | boolean, *> {
  const state = yield select()
  const column = getColumn(state, id)

  if (checkEndpoint(column.endpoint)) {
    const isLogin = yield call(autoLogin)
    if (!isLogin) {
      return false
    }
  }

  const { params } = yield call(add, id, column.endpoint, column.params)

  if (params) {
    yield put(setPrams(id, params))
  }
}

function* checkUpdateFlow(): Generator<IOEffect, void, *> {
  while (true) {
    const { id } = yield take(Actions.CHECK_COLUMN_UPDATE)
    yield fork(checkUpdate, id)
  }
}

function* fetchColumnFlow(): Generator<IOEffect, void, *> {
  while (true) {
    const { id } = yield take(Actions.FETCH_COLUMN)
    yield fork(fetchColumn, id)
  }
}

function* refreshAllColumnsFlow(): Generator<IOEffect, void, *> {
  while (true) {
    yield take(Actions.REFRESH_ALL_COLUMNS)
    yield fork(refreshAllColumns)
  }
}

function* root(): Generator<IOEffect, void, *> {
  yield fork(checkUpdateFlow)
  yield fork(refreshAllColumnsFlow)
  yield fork(fetchColumnFlow)
}

export default root
