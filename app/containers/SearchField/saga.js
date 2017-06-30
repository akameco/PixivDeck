// @flow
import { getRequest, fetchAuth } from 'services/api'
import { makeSelectInfo } from '../LoginModal/selectors'
import * as actions from './actions'
import * as Actions from './constants'
import {
  call,
  takeLatest,
  select,
  put,
  type IOEffect,
} from 'redux-saga/effects'

const endpoint = word => `/v1/search/autocomplete?word=${word}`

function* autocomplete({ word }) {
  try {
    const info = yield select(makeSelectInfo())
    const { accessToken } = yield call(fetchAuth, info)

    const { result } = yield call(getRequest, endpoint(word), null, accessToken)
    const { searchAutoCompleteKeywords } = result
    yield put(actions.fetchSuccess(searchAutoCompleteKeywords))
  } catch (err) {
    yield put(actions.fetchFailre(err))
  }
}

function* root(): Generator<IOEffect, void, void> {
  yield takeLatest(Actions.FETCH_REQUEST, autocomplete)
}

export default root
