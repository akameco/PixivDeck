// @flow
import { postRequest, fetchAuth } from 'services/api'
import { makeSelectInfo } from '../LoginModal/selectors'
import * as actions from './actions'
import * as Actions from './constants'
import { call, takeEvery, select, put, type IOEffect } from 'redux-saga/effects'

type Props = {
  id: number,
}

function* follow({ id }: Props): Generator<IOEffect, void, *> {
  try {
    const info = yield select(makeSelectInfo())
    const { accessToken } = yield call(fetchAuth, info)

    yield call(
      postRequest,
      '/v1/user/follow/add',
      { userId: id, restrict: 'public' },
      accessToken
    )
    yield put(actions.followSuccess())
  } catch (err) {
    yield put(actions.followFailer(err))
  }
}

function* unfollow({ id }: Props): Generator<IOEffect, void, *> {
  try {
    const info = yield select(makeSelectInfo())
    const { accessToken } = yield call(fetchAuth, info)

    yield call(
      postRequest,
      '/v1/user/follow/delete',
      { userId: id, restrict: 'public' },
      accessToken
    )
    yield put(actions.followSuccess())
  } catch (err) {
    yield put(actions.unFollowFailer(err))
  }
}

function* root(): Generator<IOEffect, void, void> {
  yield takeEvery(Actions.FOLLOW_REQUEST, follow)
  yield takeEvery(Actions.UN_FOLLOW_REQUEST, unfollow)
}

export default root
