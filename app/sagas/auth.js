// @flow
import {put, fork, take, call, select} from 'redux-saga/effects'
import * as Actions from '../constants/auth'
import {loginFailure, authSending, clearError, setAuth, logout} from '../actions/auth'
import {openModal, closeModal} from '../actions/manage'
import type {State} from '../types'
import Api from '../api'

function * authorize(username: string, password: string): Generator<*, *, *> {
	// エラーを非表示
	yield put(clearError())
	yield put(authSending(true))
	try {
		yield call(Api.login, username, password)
		yield put(setAuth(username, password))
		yield put(closeModal())
	} catch (err) {
		yield put(loginFailure())

		return false
	} finally {
		yield put(authSending(false))
	}
}

export function * autoLogin(): Generator<*, *, *> {
	const {username, password} = yield select((state: State) => state.auth)
	if (username && password) {
		yield call(Api.login, username, password)
	} else {
		yield put(logout())
	}
}

function * loginFlow(): Generator<*, *, *> {
	while (true) {
		const {username, password} = yield take(Actions.LOGIN_REQUEST)
		yield call(authorize, username, password)
	}
}

function * logoutFlow(): Generator<*, *, *> {
	while (true) {
		yield take(Actions.LOGOUT)
		yield put(authSending(false))
		// ログインモーダルを表示
		yield put(openModal('LOGIN'))
	}
}

function * autoLoginFlow(): Generator<*, *, *> {
	while (true) {
		yield take(Actions.AUTO_LOGIN)
		yield fork(autoLogin)
	}
}

function * root(): Generator<*, *, *> {
	yield fork(logoutFlow)
	yield fork(loginFlow)
	yield fork(autoLoginFlow)
}

export default root
