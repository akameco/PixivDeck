// @flow
import type { Saga } from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { clean } from '../../store'
import * as Actions from './constants'

// eslint-disable-next-line
function* removeCache(): Saga<void> {
  try {
    clean()
  } catch (err) {}
}

function* root(): Saga<void> {
  yield takeLatest(Actions.REMOVE_CACHE, removeCache)
}

export default root
