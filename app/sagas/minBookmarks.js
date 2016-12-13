// @flow
import {delay} from 'redux-saga'
import {fork, take, select, call} from 'redux-saga/effects'
import * as Actions from '../constants/column'
import {getIllusts} from '../reducers'
import {nextPage} from './nextColumnPage'

function * fetchUntilLimit(id: Id): Generator<*, *, *> {
	const state = yield select()
	let illusts = getIllusts(state, id)
	try {
		while (illusts.length < 20) {
			yield call(nextPage, id)
			const state = yield select()
			illusts = getIllusts(state, id)
			yield call(delay, 200)
		}
	} catch (err) {
		console.log(err)
	}
}

function * setMinBookmarksFlow(): Generator<*, *, *> {
	while (true) {
		const {id} = yield take(Actions.SET_COLUMN_MIN_BOOKMARKS)
		// カラムのイラストが20以下ならリクエストを送る
		yield call(fetchUntilLimit, id)
	}
}

function * root(): Generator<*, *, *> {
	yield fork(setMinBookmarksFlow)
}

export default root
