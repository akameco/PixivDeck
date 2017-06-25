// @flow
import { call, fork, takeEvery, type IOEffect } from 'redux-saga/effects' // eslint-disable-line
import * as Actions from '../containers/FollowButton/constants'
import Api from '../api'

function* follow({ id }: { id: number }): Generator<IOEffect, void, *> {
  yield call(Api.userFollowAdd, id)
}

function* unfollow({ id }: { id: number }): Generator<IOEffect, void, *> {
  yield call(Api.userFollowDelete, id)
}

function* root(): Generator<*, *, *> {
  yield takeEvery(Actions.FOLLLOW_REQUEST, follow)
  yield takeEvery(Actions.UN_FOLLLOW_REQUEST, unfollow)
}

export default root
