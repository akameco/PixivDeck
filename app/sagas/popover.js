import {put, fork, call, takeEvery} from 'redux-saga/effects'
import * as Actions from '../constants/popover'
import {
	clearUserPopoverIllust,
	addUserPopoverIllust,
} from '../actions/popover'
import Api from '../api'

function * popover({id}: {id: Id}) {
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

function * popoverFlow() {
	yield * takeEvery(Actions.OPEN_USER_POPOVER, popover)
}

function * root() {
	yield fork(popoverFlow)
}

export default root
