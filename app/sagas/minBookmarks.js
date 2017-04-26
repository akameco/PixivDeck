import { delay } from 'redux-saga'
import { fork, take, select, call } from 'redux-saga/effects'
import * as Actions from 'constants/column'
import { getIllusts } from 'reducers'
import { nextPage } from './nextColumnPage'

function* fetchUntilLimit(id: Id) {
  const state = yield select()
  let illusts = getIllusts(state, id)
  try {
    // カラムのイラストが20以下ならリクエストを送る
    const limit = 20

    while (illusts.length < limit) {
      yield call(nextPage, id)
      const state = yield select()
      illusts = getIllusts(state, id)

      const delayMs = 200
      yield call(delay, delayMs)
    }
  } catch (err) {
    console.log(err)
  }
}

function* setMinBookmarksFlow() {
  while (true) {
    const { id } = yield take(Actions.SET_COLUMN_MIN_BOOKMARKS)
    yield call(fetchUntilLimit, id)
  }
}

function* root() {
  yield fork(setMinBookmarksFlow)
}

export default root
