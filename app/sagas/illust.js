// @flow
// eslint-disable-next-line import/order
import { fork, take, call, put, type IOEffect } from 'redux-saga/effects'
import { refreshAllColumns } from 'actions'
import { ADD_BOOKMARK_REQUEST } from '../containers/BookmarkButton/constants'
import Api from '../api'

function* addBookmark(id: number, isPublic: boolean = true) {
  yield call(Api.illustBookmarkAdd, id, isPublic)
  // すべてのカラムを更新
  yield put(refreshAllColumns())
}

function* addBookmarkFlow(): Generator<IOEffect, void, *> {
  while (true) {
    const { id, isPublic } = yield take(ADD_BOOKMARK_REQUEST)
    yield call(addBookmark, id, isPublic)
  }
}

function* root(): Generator<IOEffect, void, *> {
  yield fork(addBookmarkFlow)
}

export default root
