// @flow
import {takeEvery} from 'redux-saga'
import {put, fork, call} from 'redux-saga/effects'
import type {IOEffect} from 'redux-saga/effects'
import * as Actions from '../constants/popover'
import {
	clearUserPopoverIllust,
	addUserPopoverIllust,
} from '../actions/popover'
import Api from '../api'

function * popover({id}: {id: Id}): Generator<IOEffect, *, *> {
	// クリア
	yield put(clearUserPopoverIllust())
	try {
		const type = 'illust'
		// ユーザのイラストを取得
		const {illusts} = yield call(Api.userIllusts, id, type)

		// 3件取得しストアに反映
		const limit = 3
		const popoverIllust = illusts.slice(0, limit)
		yield put(addUserPopoverIllust(popoverIllust))
	} catch (err) {}
}

function * popoverFlow(): Generator<IOEffect, *, *> {
	yield * takeEvery(Actions.OPEN_USER_POPOVER, popover)
}

function * root(): Generator<*, *, *> {
	yield fork(popoverFlow)
}

export default root
