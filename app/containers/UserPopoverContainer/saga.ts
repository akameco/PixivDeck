// eslint-disable-next-line import/order

import { put, call, takeEvery } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

function* popover({ id }) {
  yield put(actions.clear())

  try {
    const endpoint = `/v1/user/illusts?type=illust&user_id=${id}`
    const { result } = yield call(api.get, endpoint, true)
    const illusts = result.illusts
    const limited = illusts.length > 3 ? illusts.slice(0, 3) : illusts
    yield put(actions.popoverSuccess(limited))
  } catch (error) {
    yield put(actions.popoverFailre(error))
  }
}

function* root() {
  yield takeEvery(Actions.OPEN, popover)
}

export default root
