// @flow
import { union } from 'lodash'
import { addColumn } from 'containers/ColumnManager/actions'
import { makeSelectInfo } from 'containers/LoginModal/selectors'
import { getToken } from 'containers/LoginModal/saga'
import { getRequest, fetchAuth } from 'services/api'
import { ADD_BOOKMARK_SUCCESS } from '../BookmarkButton/constants'
import * as Actions from './constants'
import * as actions from './actions'
import type { Action } from './actionTypes'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

function* addBookmarkColumn({ id }: { id: ColumnId }) {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addBookmarkColumnSuccess(id))
  }

  yield put(addColumn(`bookmark-${id}`, { columnId: id, type: 'BOOKMARK' }))
}

function* fetchBookmark(action: Action) {
  const { id } = action
  const { illustIds } = yield select(makeSelectColumn(), action)

  try {
    const info = yield select(makeSelectInfo())
    // TODO
    const { accessToken, user: { id: userId } } = yield call(fetchAuth, info)

    const response = yield call(
      getRequest,
      `/v1/user/bookmarks/illust?user_id=${userId}&restrict=${id}`,
      null,
      accessToken
    )
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchBookmarkSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchBookmarkFailre(id))
  }
}

function* fetchNextBookmark(action: Action) {
  const { id } = action
  const { illustIds, nextUrl } = yield select(makeSelectColumn(), action)

  try {
    if (!nextUrl) {
      return
    }

    const accessToken = yield call(getToken)

    const response = yield call(getRequest, nextUrl, null, accessToken)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchBookmarkSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextBookmarkFailre(id))
  }
}

function* reloadBookmakColumns(action: { +restrict: ColumnId }) {
  // TOOD Tabelにある場合のみ更新する
  yield put(actions.fetchBookmark(action.restrict))
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_BOOKMARK_COLUMN, addBookmarkColumn)
  yield takeEvery(Actions.FETCH_BOOKMARK, fetchBookmark)
  yield takeEvery(Actions.FETCH_NEXT_BOOKMARK, fetchNextBookmark)
  yield takeEvery(ADD_BOOKMARK_SUCCESS, reloadBookmakColumns)
}
