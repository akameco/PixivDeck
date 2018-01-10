// @flow
import { delay, type Saga } from 'redux-saga'
import { put, select, call, takeEvery, fork, take } from 'redux-saga/effects'
import { union, difference } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
import { addNotifyWithIllust } from 'containers/Notify/actions'
import * as api from '../Api/sagas'
import * as fetchSaga from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'
import type { Action } from './actionTypes'

export function* addColumn({ id }: Action): Saga<void> {
  const ids: Array<?ColumnId> = yield select(selectors.makeSelectIds())
  const word = id.replace(/\d+users入り$/, '')

  if (ids.every(v => v !== word)) {
    yield put(actions.addColumnSuccess(word))
  }

  yield put(addTable(`search-${word}`, { columnId: word, type: 'SEARCH' }))
}

const getEndpoint = word =>
  `/v1/search/illust?word=${word}&search_target=partial_match_for_tags&sort=date_desc`

function* fetchSearch(action: Action): Saga<void> {
  const { id } = action
  const word = id.replace(/\d+users入り$/, '')
  const { ids, nextUrl, usersIn } = yield select(
    selectors.makeSelectColumn(),
    action
  )
  const hasMore = yield select(selectors.makeSelectHasMore(), { id: word })

  // nullのチェックではない
  if (hasMore === false) {
    return
  }

  const fomattedWord = usersIn === 0 ? word : `${word}${usersIn}users入り`

  const endpoint = nextUrl ? nextUrl : getEndpoint(fomattedWord)
  yield call(fetchSaga.fetchColumn, endpoint, word, actions, ids)
}

function* fetchUntilLimit(action: Action): Saga<void> {
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

      yield call(delay, 2000)
    }
  } catch (err) {
    yield put(actions.fetchNewFailre(action.id, err))
  }
}

function* fetchNew({ id }: Action): Saga<void> {
  try {
    const { ids, usersIn } = yield select(selectors.makeSelectColumn(), { id })
    const beforeIds = yield select(selectors.makeLimitedSelectIllustsId(), {
      id,
    })

    const fomattedWord = usersIn === 0 ? id : `${id}${usersIn}users入り`
    const endpoint = getEndpoint(fomattedWord)

    const { result } = yield call(api.get, endpoint, true)

    const nextIds = union(result.illusts, ids)
    yield put(actions.fetchNewSuccess(id, nextIds))

    const afterIds = yield select(selectors.makeLimitedSelectIllustsId(), {
      id,
    })

    const diffIllusts = difference(afterIds, beforeIds)
    if (diffIllusts.length > 0) {
      for (const illustId of diffIllusts) {
        yield put(addNotifyWithIllust(`検索新着 ${id} イラスト`, illustId))
      }
    }
  } catch (err) {
    yield put(actions.fetchNewFailre(id, err))
  }
}

// TODO キャンセル
function* fetchNewWatch(action: Action) {
  try {
    while (true) {
      const interval = yield select(selectors.getInterval, action)
      yield delay(interval || 2000)
      yield call(fetchNew, action)
    }
  } catch (err) {
    // TODO エラーハンドリング
  }
}

export function* usersIn(): Saga<void> {
  while (true) {
    const { id, usersIn: value } = yield take(Actions.USERS_IN)
    // 検索ワードにusers入りがあれば消す。
    const word = id.replace(/\d+users入り$/, '')

    // urlの変更およびリクエストを行う
    yield put(actions.setUsersIn(word, value))
    yield put(actions.resetIds(word))
    yield put(actions.setNextUrl(word, null))
    yield put(actions.fetch(word))
  }
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)

  yield takeEvery(
    [Actions.FETCH, Actions.FETCH_NEXT, Actions.SET_MIN_BOOKBOOK],
    fetchUntilLimit
  )

  // $FlowFixMe
  yield takeEvery(Actions.START_WATCH, fetchNewWatch)
  yield fork(usersIn)
}
