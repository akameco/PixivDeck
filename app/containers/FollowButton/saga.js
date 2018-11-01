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
  } catch (error) {
    yield put(actions.followFailer(error))
  }
}

export function* unfollow({ id }: Props): Saga<void> {
  try {
    const data = { userId: id, restrict: 'public' }
    yield call(api.post, '/v1/user/follow/delete', data)
    yield put(actions.unFollowSuccess('public'))
  } catch (error) {
    yield put(actions.unFollowFailer(error))
  }
}

function* root(): Saga<void> {
  yield takeEvery(Actions.FOLLOW_REQUEST, follow)
  yield takeEvery(Actions.UN_FOLLOW_REQUEST, unfollow)
}

export default root
