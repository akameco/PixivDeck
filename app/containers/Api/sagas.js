// @flow
import { call } from 'redux-saga/effects'
import { getToken } from 'containers/LoginModal/saga'
import * as api from 'services/api'

export function* post(endpoint: string, data: Object): Generator<*, void, *> {
  const token = yield call(getToken)
  yield call(api.postRequest, endpoint, data, token)
}
