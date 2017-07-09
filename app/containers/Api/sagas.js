// @flow
import { call } from 'redux-saga/effects'
import { getToken } from 'containers/LoginModal/saga'
import * as api from 'services/api'
import type { Response } from 'services/api'

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
  const response = yield call(api.getRequest, endpoint, {}, token)
  return response
}
