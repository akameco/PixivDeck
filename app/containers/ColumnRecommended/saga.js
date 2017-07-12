// @flow
import { addTable } from 'containers/ColumnManager/actions'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Action = {
  +id: ColumnId,
}

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const modes: Array<?ColumnId> = yield select(makeSelectModes())

  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addTable(`recommended`, { type: 'RECOMMENDED', columnId: 'recommended' })
  )
}

const getEndpoint = () =>
  `/v1/illust/recommended?content_type=illust&include_ranking_label=true`

function* fetch(action: Action) {
  const { ids, nextUrl } = yield select(makeSelectColumn(), action)
  const endpoint = nextUrl ? nextUrl : getEndpoint()
  yield call(fetchColumn.fetchColumn, endpoint, action.id, actions, ids)
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH, fetch)
}
