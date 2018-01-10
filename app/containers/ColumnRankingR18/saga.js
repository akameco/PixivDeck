// @flow
import type { Saga } from 'redux-saga'
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { R18Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'

type Action = {
  +id: R18Mode,
}

export function* addColumn({ id }: Action): Saga<void> {
  const modes: Array<?R18Mode> = yield select(makeSelectModes())

  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addTable(`ranking-r18-${id}`, { columnId: id, type: 'RANKING_R18' })
  )
}

function* fetchRanking(action: Action): Saga<*> {
  // $FlowFixMe
  const { ids, nextUrl } = yield select(makeSelectColumn(), action)
  const endpoint = nextUrl ? nextUrl : `/v1/illust/ranking?mode=${action.id}`
  yield call(fetchColumn.fetchColumn, endpoint, action.id, actions, ids)
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery([Actions.FETCH, Actions.FETCH_NEXT], fetchRanking)
}
