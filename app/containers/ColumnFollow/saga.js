// @flow
import type { Saga } from 'redux-saga'
import { difference } from 'lodash'
import { put, select, call, takeEvery, delay } from 'redux-saga/effects'
import { addTable } from 'containers/ColumnManager/actions'
import { getMyId } from 'containers/LoginModal/selectors'
import { addNotifyWithIllust } from '../Notify/actions'
import { FOLLOW_SUCCESS } from '../FollowButton/constants'
import * as fetchColumn from '../Column/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'

type Action = { id: ColumnId }

export function* addFollowColumn({ id }: Action): Saga<void> {
  const ids: Array<?ColumnId> = yield select(selectors.makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`follow-${id}`, { columnId: id, type: 'FOLLOW' }))
}

const getEndpoint = (userId, restrict) =>
  `/v2/illust/follow?user_id=${userId}&restrict=${restrict}`

function* fetchFollow({ id }: Action): Saga<void> {
  try {
    const { ids, nextUrl } = yield select(selectors.makeSelectColumn(), { id })
    const endpoint = nextUrl ? nextUrl : getEndpoint(yield select(getMyId), id)
    yield call(fetchColumn.fetchColumn, endpoint, id, actions, ids)
  } catch (error) {
    yield put(actions.fetchFailre(id, error))
  }
}

function* fetchNew({ id }: Action): Saga<void> {
  const { ids } = yield select(selectors.makeSelectColumn(), { id })
  const endpoint = getEndpoint(yield select(getMyId), id)
  yield call(fetchColumn.fetchNew, { endpoint, id, ids, order: true }, actions)
}

// TODO キャンセル
function* fetchNewWatch(action: Action) {
  try {
    while (true) {
      const { interval } = yield select(selectors.makeSelectColumn(), action)
      // 増加したイラストをチェック
      const { ids } = yield select(selectors.makeSelectColumn(), action)
      yield call(fetchNew, action)
      const { ids: nextIds } = yield select(
        selectors.makeSelectColumn(),
        action
      )

      if (ids.length > 0) {
        const diffIllusts = difference(nextIds, ids)
        for (const id of diffIllusts) {
          yield put(addNotifyWithIllust('新着イラスト', id))
        }
      }

      yield delay(interval)
    }
  } catch (error) {
    // TODO エラーハンドリング
  }
}

function* handleFollowSuccess({ restrict }): Saga<*> {
  const ids: Array<?ColumnId> = yield select(selectors.makeSelectIds())
  if (ids.some(v => v === restrict)) {
    yield call(fetchFollow, { id: restrict })
  }
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.ADD_COLUMN, addFollowColumn)
  yield takeEvery([Actions.FETCH, Actions.FETCH_NEXT], fetchFollow)

  yield takeEvery(Actions.ADD_COLUMN_SUCCESS, fetchNewWatch)
  yield takeEvery(FOLLOW_SUCCESS, handleFollowSuccess)
}
