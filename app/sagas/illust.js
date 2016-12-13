// @flow
import {fork, take, call, put} from 'redux-saga/effects'
import type {IOEffect} from 'redux-saga/effects'
import * as Actions from '../constants/illust'
import {refreshAllColumns} from '../actions'
import Api from '../api'

function * addBookmark(id: number, isPublic: bool = true): Generator<IOEffect, *, *> {
	yield call(Api.illustBookmarkAdd, id, isPublic)
	// すべてのカラムを更新
	yield put(refreshAllColumns())
}

function * addBookmarkFlow(): Generator<IOEffect, *, *> {
	while (true) {
		const {id, isPublic} = yield take(Actions.ADD_BOOKMARK)
		yield call(addBookmark, id, isPublic)
	}
}

function * root(): Generator<*, *, *> {
	yield fork(addBookmarkFlow)
}

export default root
