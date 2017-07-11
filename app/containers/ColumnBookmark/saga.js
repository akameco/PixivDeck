// @flow
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import { getMyId } from 'containers/LoginModal/selectors'
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

const getEndpoint = (userId, restrict) =>
  `/v1/user/bookmarks/illust?user_id=${userId}&restrict=${restrict}`

export function* fetchBookmark({ id }: Action): Generator<*, void, *> {
  const { ids, nextUrl } = yield select(makeSelectColumn(), { id })
  const endpoint = nextUrl ? nextUrl : getEndpoint(yield select(getMyId), id)
  yield call(column.fetchColumn, endpoint, id, { ...actions }, ids)
}

function* reloadBookmakColumns(action: { +restrict: ColumnId }) {
  yield put(actions.fetch(action.restrict))
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery([Actions.FETCH, Actions.FETCH_NEXT], fetchBookmark)
  yield takeEvery(ADD_BOOKMARK_SUCCESS, reloadBookmakColumns)
}
