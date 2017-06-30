// @flow
// eslint-disable-next-line import/order
import { select, put, call, takeEvery, type IOEffect } from 'redux-saga/effects'
import { getRequest, fetchAuth } from 'services/api'
import { makeSelectInfo } from '../LoginModal/selectors'
import * as actions from './actions'
import * as Actions from './constants'

function* popover({ id }) {
  yield put(actions.clear())

  try {
    // TODO
    const info = yield select(makeSelectInfo())
    const { accessToken } = yield call(fetchAuth, info)

    const endpoint = `/v1/user/illusts?type=illust&user_id=${id}`
    const response = yield call(getRequest, endpoint, null, accessToken)

    const illusts = response.result.illusts
    const limited = illusts.length > 3 ? illusts.slice(0, 3) : illusts

    yield put(actions.popoverSuccess(response, limited))
  } catch (err) {
    yield put(actions.popoverFailre(err))
  }
}

function* root(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.OPEN, popover)
}

export default root
