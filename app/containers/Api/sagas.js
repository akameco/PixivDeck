// @flow
import { call, put } from 'redux-saga/effects'
import { getToken } from 'containers/LoginModal/saga'
import * as api from 'services/api'
import type { Response } from 'services/api'
import * as actions from './actions'

export function* post(endpoint: string, data: Object): Generator<*, void, *> {
  const token = yield call(getToken)
  yield call(api.postRequest, endpoint, data, token)
}

export function* get(
  endpoint: string,
  isToken?: boolean
): Generator<*, Response, *> {
  let token = null
  if (isToken) {
    token = yield call(getToken)
  }
  // $FlowFixMe
  const response = yield call(api.getRequest, endpoint, {}, token)
  // $FlowFixMe
  yield put(actions.apiRequestSuccess(response))
  // $FlowFixMe
  return response
}
