// @flow
// eslint-disable-next-line import/order
import { select, put, call, takeEvery } from 'redux-saga/effects'
import { fetchAuth } from 'services/api'
import { openModal, closeModal } from '../ModalManeger/actions'
import { loginFailure, endLoading, clearError, setAuth } from './actions'
import * as Actions from './constants'
import { makeSelectInfo } from './selectors'

export function* getToken(): Generator<*, string, *> {
  const info = yield select(makeSelectInfo())
  const { accessToken } = yield call(fetchAuth, info)
  return accessToken
}

function* authorize({ username, password }): Generator<*, void, *> {
  // エラーを非表示
  yield put(clearError())
  try {
    yield call(fetchAuth, { username, password })
    yield put(setAuth(username, password))
    yield put(closeModal())
  } catch (err) {
    yield put(loginFailure())
  } finally {
    yield put(endLoading())
  }
}

function* logout() {
  yield put(endLoading())
  // ログインモーダルを表示
  yield put(openModal('Login'))
}

function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.LOGIN_REQUEST, authorize)
  yield takeEvery(Actions.LOGOUT, logout)
}

export default root
