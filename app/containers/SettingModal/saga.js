// @flow
import type { Saga } from 'redux-saga'
import { takeLatest } from 'redux-saga/effects'
import { clean } from '../../store'
import * as Actions from './constants'

// eslint-disable-next-line require-yield
function* removeCache(): Saga<void> {
  try {
    clean()
  } catch (error) {}
}

function* root(): Saga<void> {
  yield takeLatest(Actions.REMOVE_CACHE, removeCache)
}

export default root
