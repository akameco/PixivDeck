// @flow
// eslint-disable-next-line import/order
import {
  put,
  fork,
  take,
  call,
  select,
  type IOEffect,
} from 'redux-saga/effects'
import type { State } from 'types'
import Api from '../../api'
import { openModal, closeModal } from '../ModalManeger/actions'
import {
  loginFailure,
  endLoading,
  clearError,
  setAuth,
  logout,
} from './actions'
import * as Actions from './constants'

// eslint-disable-next-line
function* authorize(username: string, password: string) {
  // エラーを非表示
  yield put(clearError())
  try {
    yield call(Api.login, username, password)
    yield put(setAuth(username, password))
    yield put(closeModal())
  } catch (err) {
    yield put(loginFailure())

    return false
  } finally {
    yield put(endLoading())
  }
}

// eslint-disable-next-line
export function* autoLogin(): Generator<IOEffect, boolean, *> {
  const { username, password } = yield select(
    (state: State) => state.LoginModal
  )
  if (username && password) {
    yield call(Api.login, username, password)
    return true
  }
  yield put(logout())
  return false
}

function* loginFlow(): Generator<IOEffect, void, *> {
  while (true) {
    const { username, password } = yield take(Actions.LOGIN_REQUEST)
    yield call(authorize, username, password)
  }
}

function* logoutFlow(): Generator<IOEffect, void, void> {
  while (true) {
    yield take(Actions.LOGOUT)
    yield put(endLoading())
    // ログインモーダルを表示
    yield put(openModal('Login'))
  }
}

function* autoLoginFlow(): Generator<IOEffect, *, *> {
  while (true) {
    yield take(Actions.AUTO_LOGIN_REQUEST)
    yield fork(autoLogin)
  }
}

function* root(): Generator<*, *, *> {
  yield fork(logoutFlow)
  yield fork(loginFlow)
  yield fork(autoLoginFlow)
}

export default root
