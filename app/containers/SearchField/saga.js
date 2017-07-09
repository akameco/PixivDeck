// @flow
import { call, takeLatest, put, type IOEffect } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

const endpoint = word => `/v1/search/autocomplete?word=${word}`

type Aciton = {
  word: string,
}

export function* autocomplete({ word }: Aciton): Generator<*, void, *> {
  try {
    const { result } = yield call(api.get, endpoint(word), true)
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
