import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from 'containers/ColumnManager/constants'
import { Action } from 'containers/ColumnManager/actionTypes'
import * as actions from './actions'

function* addTable({ id }: Action) {
  yield put(actions.addTable(id))
}

export default function* root() {
  yield takeEvery(Actions.ADD_TABLE, addTable)
}
