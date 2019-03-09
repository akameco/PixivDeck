import { takeLatest } from 'redux-saga/effects'
import { clean } from '../../store'
import * as Actions from './constants'

function removeCache() {
  try {
    clean()
  } catch (error) {}
}

function* root() {
  yield takeLatest(Actions.REMOVE_CACHE, removeCache)
}

export default root
