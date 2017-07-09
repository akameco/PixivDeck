// @flow
import { union } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
import * as api from '../Api/sagas'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Action = { id: ColumnId }

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addTable(`user-illust-${id}`, { columnId: String(id), type: 'USER_ILLUST' })
  )
}

const endpoint = id => `/v1/user/illusts?type=illust&user_id=${id}`

export function* fetchUserIllust({ id }: Action): Generator<*, void, *> {
  const { ids } = yield select(makeSelectColumn(), { id })
  yield call(fetchColumn.fetchColumn, endpoint(id), id, actions, ids)
}

export function* fetchNextUserIllust({ id }: Action): Generator<*, void, *> {
  const { ids, nextUrl } = yield select(makeSelectColumn(), { id })
  yield call(fetchColumn.fetchColumn, nextUrl, id, actions, ids)
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH, fetchUserIllust)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextUserIllust)
}
