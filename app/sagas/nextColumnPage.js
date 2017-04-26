import { delay } from 'redux-saga'
// eslint-disable-next-line import/order
import { fork, take, select, call, put } from 'redux-saga/effects'
import * as Actions from 'constants/column'
import { getColumn, getIllust } from 'reducers'
import { apiRequestSuccess, nextColumnIllusts, setPrams } from 'actions'
import type { Illust } from 'types/illust'
import Api from '../api'

type Id = number
const LIMIT = 10

const filterByMinBookmarks = (illust: Illust, bookmarks: number): boolean =>
  illust.totalBookmarks >= bookmarks

export function* nextPage(id: number) {
  let state = yield select()
  const column = getColumn(state, id)
  const { response, params } = yield call(
    Api.fetch,
    column.endpoint,
    column.params
  )

  yield put(apiRequestSuccess(response))
  yield put(nextColumnIllusts(id, response.result))
  yield put(setPrams(id, params))

  state = yield select()

  const ids = response.result
  const nums: Array<number> = ids.filter(v => {
    const illust = getIllust(state, v)
    return filterByMinBookmarks(illust, column.minBookmarks)
  })

  return nums.length
}

function* nextColumnPageUntilLimit(id: Id) {
  let n = 0
  while (true) {
    const len = yield call(nextPage, id)
    n += len
    if (n > LIMIT) {
      break
    }
    yield call(delay, 200)
  }
}

function* nextColumnPageFlow() {
  while (true) {
    const { id } = yield take(Actions.NEXT_COLUMN_PAGE)
    try {
      yield call(nextColumnPageUntilLimit, id)
    } catch (err) {
      console.log(err)
    }
  }
}

function* root() {
  yield fork(nextColumnPageFlow)
}

export default root
