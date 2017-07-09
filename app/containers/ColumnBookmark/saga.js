// @flow
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import { makeSelectInfo } from 'containers/LoginModal/selectors'
import { fetchAuth } from 'services/api'
import { ADD_BOOKMARK_SUCCESS } from '../BookmarkButton/constants'
import * as Actions from './constants'
import * as actions from './actions'
import type { Action } from './actionTypes'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import * as column from '../Column/sagas'

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`bookmark-${id}`, { columnId: id, type: 'BOOKMARK' }))
}

function* fetchBookmark(action: Action) {
  const { ids } = yield select(makeSelectColumn(), action)

  // TODO
  const info = yield select(makeSelectInfo())
  const { user: { id: userId } } = yield call(fetchAuth, info)

  const endpoint = `/v1/user/bookmarks/illust?user_id=${userId}&restrict=${action.id}`
  yield call(column.fetchColumn, endpoint, action.id, { ...actions }, ids)
}

function* fetchNextBookmark(action: Action) {
  const { ids, nextUrl } = yield select(makeSelectColumn(), action)
  yield call(column.fetchColumn, nextUrl, action.id, { ...actions }, ids)
}

function* reloadBookmakColumns(action: { +restrict: ColumnId }) {
  yield put(actions.fetch(action.restrict))
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH, fetchBookmark)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextBookmark)
  yield takeEvery(ADD_BOOKMARK_SUCCESS, reloadBookmakColumns)
}
