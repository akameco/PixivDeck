// @flow
import { union } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
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
    addTable(`user-illust-${id}`, { columnId: String(id), type: 'USER_ILLUST' })
  )
}

const endpoint = id => `/v1/user/illusts?type=illust&user_id=${id}`

export function* fetchUserIllust(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { ids } = yield select(makeSelectColumn(), props)

    const { result } = yield call(api.get, endpoint(id), true)
    

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(ids, result.illusts)
    yield put(actions.fetchSuccess(id,  nextIds))
  } catch (err) {
    yield put(actions.fetchFailre(id))
  }
}

export function* fetchNextUserIllust(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { ids, nextUrl } = yield select(makeSelectColumn(), props)

    if (!nextUrl) {
      return
    }

    const { result } = yield call(api.get, nextUrl, true)
    

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(ids, result.illusts)
    yield put(actions.fetchSuccess(id,  nextIds))
  } catch (err) {
    yield put(actions.fetchNextFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH, fetchUserIllust)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextUserIllust)
}
