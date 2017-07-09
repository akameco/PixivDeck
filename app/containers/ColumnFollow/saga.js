// @flow
import { union, difference } from 'lodash'
import { delay } from 'redux-saga'
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { addColumn } from 'containers/ColumnManager/actions'
import { makeSelectInfo } from 'containers/LoginModal/selectors'
import { getToken } from 'containers/LoginModal/saga'
import { getRequest, fetchAuth } from 'services/api'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import * as selectors from './selectors'
import { addNotifyWithIllust } from '../Notify/actions'
import { FOLLOW_SUCCESS } from '../FollowButton/constants'

function* addFollowColumn({ id }: { id: ColumnId }) {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addFollowColumnSuccess(id))
  }

  yield put(addColumn(`follow-${id}`, { columnId: id, type: 'FOLLOW' }))
}

type Action = { id: ColumnId }

function createEndpoint(userId, restrict) {
  return `/v2/illust/follow?user_id=${userId}&restrict=${restrict}`
}

function* fetchFollow(action: Action): Generator<*, void, *> {
  const { id } = action
  try {
    const { illustIds } = yield select(makeSelectColumn(), action)

    // TODO
    const info = yield select(makeSelectInfo())
    const { accessToken, user: { id: userId } } = yield call(fetchAuth, info)

    const response = yield call(
      getRequest,
      `/v2/illust/follow?user_id=${userId}&restrict=${id}`,
      null,
      accessToken
    )
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)

    if (illustIds.length > 0) {
      const diffIllusts = difference(nextIds, illustIds)
      for (const id of diffIllusts) {
        yield put(addNotifyWithIllust('新着イラスト', id))
      }
    }

    yield put(actions.fetchFollowSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchFollowFailre(id, err))
  }
}

function* fetchNextFollow(action: Action) {
  const { id } = action
  try {
    const { illustIds, nextUrl } = yield select(makeSelectColumn(), action)

    if (!nextUrl) {
      return
    }

    const accessToken = yield call(getToken)

    const response = yield call(getRequest, nextUrl, null, accessToken)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchNextFollowSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextFollowFailre(id, err))
  }
}

function* fetchNew(action: Action): Generator<*, void, *> {
  try {
    const { illustIds } = yield select(selectors.makeSelectColumn(), action)

    const info = yield select(makeSelectInfo())
    const { accessToken, user: { id: userId } } = yield call(fetchAuth, info)

    const endpoint = createEndpoint(userId, action.id)

    const response = yield call(getRequest, endpoint, null, accessToken)
    const { result } = response

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchNewSuccess(action.id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNewFailre(action.id, err))
  }
}

// TODO キャンセル
function* fetchNewWatch(action: Action) {
  try {
    while (true) {
      const { interval } = yield select(selectors.makeSelectColumn(), action)
      yield call(fetchNew, action)
      yield call(delay, interval)
    }
  } catch (err) {
    // TODO エラーハンドリング
    console.log(err)
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_FOLLOW_COLUMN, addFollowColumn)
  yield takeEvery(Actions.FETCH_FOLLOW, fetchFollow)
  yield takeEvery(Actions.FETCH_NEXT_FOLLOW, fetchNextFollow)

  yield takeEvery(Actions.FETCH_FOLLOW_SUCCESS, fetchNewWatch)
  yield takeEvery(FOLLOW_SUCCESS, function*({ restrict }) {
    yield call(fetchFollow, { id: restrict })
  })
}
