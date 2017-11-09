// @flow
import { clean } from '../../store'
import { Actions } from './actionTypes'
import { takeLatest } from 'redux-saga/effects'

// eslint-disable-next-line
function* removeCache() {
  try {
    clean()
  } catch (err) {}
}

function* root(): Generator<*, void, void> {
  yield takeLatest(Actions.REMOVE_CACHE, removeCache)
}

export default root
