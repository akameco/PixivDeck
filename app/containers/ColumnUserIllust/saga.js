// @flow
import { union } from 'lodash'
import { addColumn as add } from 'containers/ColumnManager/actions'
import * as api from '../Api/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Props = { id: ColumnId }

export function* addColumn({ id }: Props): Generator<*, void, *> {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    add(`user-illust-${id}`, { columnId: String(id), type: 'USER_ILLUST' })
  )
}

const endpoint = id => `/v1/user/illusts?type=illust&user_id=${id}`

export function* fetchUserIllust(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { illustIds } = yield select(makeSelectColumn(), props)

    const response = yield call(api.get, endpoint(id), true)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchUserIllustSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchUserIllustFailre(id))
  }
}

export function* fetchNextUserIllust(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { illustIds, nextUrl } = yield select(makeSelectColumn(), props)

    if (!nextUrl) {
      return
    }

    const response = yield call(api.get, nextUrl, true)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchUserIllustSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextUserIllustFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH_USER_ILLUST, fetchUserIllust)
  yield takeEvery(Actions.FETCH_NEXT_USER_ILLUST, fetchNextUserIllust)
}
