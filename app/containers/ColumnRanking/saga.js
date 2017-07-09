// @flow
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'

type Action = { id: Mode }

export function* addRankingColumn({ id }: Action): Generator<*, void, *> {
  const modes: Array<?Mode> = yield select(makeSelectModes())
  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`ranking-${id}`, { columnId: id, type: 'RANKING' }))
}

function* fetchRanking(action: Action) {
  const { ids } = yield select(makeSelectColumn(), action)
  const endpoint = `/v1/illust/ranking?mode=${action.id}`
  yield call(fetchColumn.fetchColumn, endpoint, action.id, actions, ids)
}

function* fetchNextRanking(action: Action) {
  const { ids, nextUrl } = yield select(makeSelectColumn(), action)
  yield call(fetchColumn.fetchColumn, nextUrl, action.id, actions, ids)
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addRankingColumn)
  yield takeEvery(Actions.FETCH, fetchRanking)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextRanking)
}
