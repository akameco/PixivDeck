// @flow
import {takeEvery} from 'redux-saga'
import type {IOEffect} from 'redux-saga/effects'
import {call, fork} from 'redux-saga/effects'
import * as Actions from '../constants/user'
import Api from '../api'

type hasId = {
	id: number
};

function * follow({id}: hasId): Generator<IOEffect, *, *> {
	try {
		yield call(Api.userFollowAdd, id)
	} catch (err) {}
}

function * unfollow({id}: hasId): Generator<IOEffect, *, *> {
	try {
		yield call(Api.userFollowDelete, id)
	} catch (err) {}
}

function * followWatch(): Generator<IOEffect, *, *> {
	yield * takeEvery(Actions.FOLLOW, follow)
}

function * unfollowWatch(): Generator<IOEffect, *, *> {
	yield * takeEvery(Actions.UN_FOLLOW, unfollow)
}

function * root(): Generator<*, *, *> {
	yield fork(followWatch)
	yield fork(unfollowWatch)
}

export default root
