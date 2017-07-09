// @flow
import { delay } from 'redux-saga'
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { union, difference } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
import { addNotifyWithIllust } from 'containers/Notify/actions'
import * as api from '../Api/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'
import type { Action } from './actionTypes'
import * as fetchSaga from '../Column/sagas'

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const ids: Array<?ColumnId> = yield select(selectors.makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`search-${id}`, { columnId: id, type: 'SEARCH' }))
}

const createEndpoint = id =>
  `/v1/search/illust?word=${id}&search_target=partial_match_for_tags&sort=date_desc`

function* fetchSearch(action: Action): Generator<*, void, *> {
  const { id } = action
  const { ids, nextUrl } = yield select(selectors.makeSelectColumn(), action)
  const hasMore = yield select(selectors.makeSelectHasMore(), action)

  // nullのチェックではない
  if (hasMore === false) {
    return
  }

  const endpoint = nextUrl ? nextUrl : createEndpoint(id)
  yield call(fetchSaga.fetchColumn, endpoint, id, actions, ids)
}

function* fetchUntilLimit(action: Action): Generator<*, void, *> {
  try {
    const initLen: number = yield select(selectors.makeIllustLength(), action)

    while (true) {
      yield call(fetchSearch, action)

      const len = yield select(selectors.makeIllustLength(), action)

      const nextUrl = yield select(selectors.makeSelectNextUrl(), action)

      if (!nextUrl) {
        return
      }

      // 新しく取得したイラスト数が10より少ない場合、データを再fetchする
      if (len - initLen > 10) {
        return
      }

      yield call(delay, 200)
    }
  } catch (err) {
    yield put(actions.fetchNewFailre(action.id, err))
  }
}

function* fetchNew(action: Action): Generator<*, void, *> {
  try {
    const { ids } = yield select(selectors.makeSelectColumn(), action)
    const beforeIds = yield select(
      selectors.makeLimitedSelectIllustsId(),
      action
    )

    const endpoint = createEndpoint(action.id)

    const { result } = yield call(api.get, endpoint, true)

    const nextIds = union(result.illusts, ids)
    yield put(actions.fetchNewSuccess(action.id, nextIds))

    const afterIds = yield select(
      selectors.makeLimitedSelectIllustsId(),
      action
    )

    const diffIllusts = difference(afterIds, beforeIds)
    if (diffIllusts.length > 0) {
      for (const illustId of diffIllusts) {
        yield put(addNotifyWithIllust(`検索新着 ${action.id} イラスト`, illustId))
      }
    }
  } catch (err) {
    yield put(actions.fetchNewFailre(action.id, err))
  }
}

// TODO キャンセル
function* fetchNewWatch(action: Action) {
  try {
    while (true) {
      yield call(fetchNew, action)
      const { interval } = yield select(selectors.makeSelectColumn(), action)
      yield delay(interval)
    }
  } catch (err) {
    // TODO エラーハンドリング
    console.log(err)
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)

  yield takeEvery(
    [Actions.FETCH, Actions.FETCH_NEXT, Actions.SET_MIN_BOOKBOOK],
    fetchUntilLimit
  )

  yield takeEvery(Actions.FETCH_SUCCESS, fetchNewWatch)
  yield takeEvery(Actions.FETCH_NEW, fetchNewWatch)
}
