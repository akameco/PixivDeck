// @flow
import { Actions, type Action } from '../ColumnManager/actionTypes'
import * as actions from './actions'
import { put, takeEvery } from 'redux-saga/effects'

function* addTable({ id }: Action) {
  yield put(actions.addTable(id))
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_TABLE, addTable)
}
