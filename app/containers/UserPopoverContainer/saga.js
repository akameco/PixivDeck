// @flow
// eslint-disable-next-line import/order
import type { Saga } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

function* popover({ id }): Saga<*> {
  yield put(actions.clear())

  try {
    const endpoint = `/v1/user/illusts?type=illust&user_id=${id}`
    const { result } = yield call(api.get, endpoint, true)

    const illusts = result.illusts
    const limited = illusts.length > 3 ? illusts.slice(0, 3) : illusts

    yield put(actions.popoverSuccess(limited))
  } catch (err) {
    yield put(actions.popoverFailre(err))
  }
}

function* root(): Saga<void> {
  yield takeEvery(Actions.OPEN, popover)
}

export default root
