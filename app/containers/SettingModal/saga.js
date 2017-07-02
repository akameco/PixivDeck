// @flow
import { clean } from '../../store'
import * as Actions from './constants'
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
