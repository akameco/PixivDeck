// @flow
import { addTable } from 'containers/ColumnManager/actions'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { R18Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Action = {
  +id: R18Mode,
}

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const modes: Array<?R18Mode> = yield select(makeSelectModes())

  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addTable(`ranking-r18-${id}`, { columnId: id, type: 'RANKING_R18' })
  )
}

function* fetchRanking(action: Action) {
  const { ids } = yield select(makeSelectColumn(), action)
  const endpoint = `/v1/illust/ranking?mode=${action.id}`
  yield call(fetchColumn.fetchColumn, endpoint, action.id, actions, ids)
}

function* fetchNextRanking18(action: Action) {
  const { ids, nextUrl } = yield select(makeSelectColumn(), action)
  yield call(fetchColumn.fetchColumn, nextUrl, action.id, actions, ids)
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH, fetchRanking)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextRanking18)
}
