// @flow
import type { Saga } from 'redux-saga'
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import { getMyId } from 'containers/LoginModal/selectors'
import { ADD_BOOKMARK_SUCCESS } from '../BookmarkButton/constants'
import * as column from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { Action } from './actionTypes'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'

export function* addColumn({ id }: { id: 'public' }): Saga<void> {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`bookmark-${id}`, { columnId: id, type: 'BOOKMARK' }))
}

const getEndpoint = (userId, restrict) =>
  `/v1/user/bookmarks/illust?user_id=${userId}&restrict=${restrict}`

export function* fetchBookmark({ id }: { id: 'public' }): Saga<void> {
  const { ids, nextUrl } = yield select(makeSelectColumn(), { id })
  const endpoint = nextUrl ? nextUrl : getEndpoint(yield select(getMyId), id)
  yield call(column.fetchColumn, endpoint, id, { ...actions }, ids)
}

export function* fetchNew({
  restrict: id,
}: {
  restrict: $PropertyType<Action, 'id'>,
}): Saga<void> {
  try {
    const { ids } = yield select(makeSelectColumn(), { id })
    const endpoint = getEndpoint(yield select(getMyId), id)
    yield call(column.fetchNew, { endpoint, id, ids, order: true }, actions)
  } catch (err) {
    yield put(actions.fetchFailre(id, err))
  }
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery([Actions.FETCH, Actions.FETCH_NEXT], fetchBookmark)
  yield takeEvery(ADD_BOOKMARK_SUCCESS, fetchNew)
}
