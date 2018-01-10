// @flow
import type { Saga } from 'redux-saga'
import { call, takeEvery, put } from 'redux-saga/effects'
import * as api from '../Api/sagas'
import * as actions from './actions'
import * as Actions from './constants'

type Props = {
  id: number,
}

export function* follow({ id }: Props): Saga<void> {
  try {
    const data = { userId: id, restrict: 'public' }
    yield call(api.post, '/v1/user/follow/add', data)
    yield put(actions.followSuccess('public'))
  } catch (err) {
    yield put(actions.followFailer(err))
  }
}

export function* unfollow({ id }: Props): Saga<void> {
  try {
    const data = { userId: id, restrict: 'public' }
    yield call(api.post, '/v1/user/follow/delete', data)
    yield put(actions.unFollowSuccess('public'))
  } catch (err) {
    yield put(actions.unFollowFailer(err))
  }
}

function* root(): Saga<void> {
  yield takeEvery(Actions.FOLLOW_REQUEST, follow)
  yield takeEvery(Actions.UN_FOLLOW_REQUEST, unfollow)
}

export default root
