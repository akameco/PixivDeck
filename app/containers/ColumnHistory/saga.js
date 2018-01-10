// @flow
import type { Saga } from 'redux-saga'
import { addTable } from 'containers/ColumnManager/actions'
import { put, takeEvery } from 'redux-saga/effects'
import { OPEN_ILLUST_VIEWER } from '../IllustPreview/constants'
import { OPEN_MANGA_PREVIEW } from '../MangaPreview/constants'
import * as Actions from './constants'
import * as actions from './actions'

export function* addHistoryColumn(): Saga<void> {
  yield put(addTable('HISTORY', { columnId: 'history', type: 'HISTORY' }))
}

type Action = { id: number }

export function* addHistory({ id }: Action): Saga<void> {
  yield put(actions.addHistory(id))
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_COLUMN_HISTORY, addHistoryColumn)

  yield takeEvery([OPEN_ILLUST_VIEWER, OPEN_MANGA_PREVIEW], addHistory)
}
