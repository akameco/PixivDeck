import { call, put } from 'redux-saga/effects'
import { getToken } from 'containers/LoginModal/saga'
import * as api from 'services/api'
import * as actions from './actions'

export function* post(endpoint: string, data: object) {
  const token = yield call(getToken)
  yield call(api.postRequest, endpoint, data, token)
}

export function* get(endpoint: string, isToken?: boolean) {
  let token = null

  if (isToken) {
    token = yield call(getToken)
  }

  const response = yield call(api.getRequest, endpoint, {}, token)

  yield put(actions.apiRequestSuccess(response))

  return response
}
