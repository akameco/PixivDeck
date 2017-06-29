// @flow
import * as Actions from 'containers/ColumnManager/constants'
import type { Action } from 'containers/ColumnManager/actionTypes'
import * as actions from './actions'
import { put, takeEvery } from 'redux-saga/effects'

function* addTable({ id }: Action) {
  yield put(actions.add(id))
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addTable)
}
