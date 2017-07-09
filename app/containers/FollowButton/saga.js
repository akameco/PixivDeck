// @flow
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'
import { call, takeEvery, put, type IOEffect } from 'redux-saga/effects'

type Props = {
  id: number,
}

export function* follow({ id }: Props): Generator<IOEffect, void, *> {
  try {
    const data = { userId: id, restrict: 'public' }
    yield call(api.post, '/v1/user/follow/add', data)
    yield put(actions.followSuccess('public'))
  } catch (err) {
    yield put(actions.followFailer(err))
  }
}

export function* unfollow({ id }: Props): Generator<IOEffect, void, *> {
  try {
    const data = { userId: id, restrict: 'public' }
    yield call(api.post, '/v1/user/follow/delete', data)
    yield put(actions.unFollowSuccess('public'))
  } catch (err) {
    yield put(actions.unFollowFailer(err))
  }
}

function* root(): Generator<IOEffect, void, void> {
  yield takeEvery(Actions.FOLLOW_REQUEST, follow)
  yield takeEvery(Actions.UN_FOLLOW_REQUEST, unfollow)
}

export default root
