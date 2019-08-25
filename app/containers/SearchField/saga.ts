import { call, takeLatest, put } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

const endpoint = word => `/v1/search/autocomplete?word=${word}`

interface Aciton {
  word: string
}
export function* autocomplete({ word }: Aciton) {
  try {
    const { result } = yield call(api.get, endpoint(word), true)
    const { searchAutoCompleteKeywords } = result
    yield put(actions.fetchSuccess(searchAutoCompleteKeywords))
  } catch (error) {
    yield put(actions.fetchFailre(error))
  }
}

function* root() {
  yield takeLatest(Actions.FETCH_REQUEST, autocomplete)
}

export default root
