// @flow
import type { Saga } from 'redux-saga'
import { call, takeLatest, put } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

const endpoint = word => `/v1/search/autocomplete?word=${word}`

type Aciton = {
  word: string,
}

export function* autocomplete({ word }: Aciton): Saga<void> {
  try {
    const { result } = yield call(api.get, endpoint(word), true)
    const { searchAutoCompleteKeywords } = result
    yield put(actions.fetchSuccess(searchAutoCompleteKeywords))
  } catch (error) {
    yield put(actions.fetchFailre(error))
  }
}

function* root(): Saga<void> {
  yield takeLatest(Actions.FETCH_REQUEST, autocomplete)
}

export default root
