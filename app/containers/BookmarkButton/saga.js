// @flow
import type { Saga } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from 'containers/Api/sagas'
import { get } from '../Api/sagas'
import * as columnActions from '../ColumnBookmark/actions'
import * as Actions from './constants'
import * as actions from './actions'
import type { Restrict } from './types'

type Props = {
  id: number,
  restrict: Restrict,
}

export function* bookmark({ id, restrict }: Props): Saga<void> {
  try {
    yield call(api.post, '/v2/illust/bookmark/add', { illustId: id, restrict })

    yield put(actions.addBookmarkSuccess(id, restrict))
  } catch (err) {
    yield put(actions.addBookmarkFailer(id, err))
  }
}

export function* deleteTask({ id }: Props): Saga<void> {
  try {
    yield call(api.post, '/v1/illust/bookmark/delete', { illustId: id })
    yield put(actions.deleteBookmarkSuccess(id))
    yield put(columnActions.removeItem('public', id))
  } catch (err) {
    yield put(actions.deleteBookmarkFailer(id, err))
  }
}

function* success({ id }: Props) {
  try {
    yield call(get, `/v1/illust/detail?illust_id=${id}`, true)
  } catch (err) {}
}

function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_BOOKMARK_REQUEST, bookmark)
  yield takeEvery(Actions.DELETE_BOOKMARK_REQUEST, deleteTask)
  yield takeEvery(
    [Actions.ADD_BOOKMARK_SUCCESS, Actions.DELETE_BOOKMARK_SUCCESS],
    success
  )
}

export default root
