// @flow
import union from 'lodash/union'
import { addColumn } from 'containers/ColumnManager/actions'
import { makeSelectInfo } from 'containers/LoginModal/selectors'
import { getRequest, fetchAuth } from '../../api/client'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import { makeSelectColumn, makeSelectIds } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Props = { id: ColumnId }

function* addUserIllustColumn({ id }: Props) {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addUserIllustColumnSuccess(id))
  }

  yield put(
    addColumn(`user-illust-${id}`, {
      columnId: String(id),
      type: 'USER_ILLUST',
    })
  )
}

function* fetchUserIllust(props: Props) {
  const { id } = props
  try {
    const { illustIds } = yield select(makeSelectColumn(), props)

    const info = yield select(makeSelectInfo())
    // TODO
    const { accessToken } = yield call(fetchAuth, info)

    const response = yield call(
      getRequest,
      `/v1/user/illusts?type=illust&user_id=${id}`,
      null,
      accessToken
    )
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchUserIllustSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchUserIllustFailre(id))
  }
}

function* fetchNextUserIllust(props: Props) {
  const { id } = props
  try {
    const { illustIds, nextUrl } = yield select(makeSelectColumn(), props)

    if (!nextUrl) {
      return
    }

    const info = yield select(makeSelectInfo())
    const { accessToken } = yield call(fetchAuth, info)

    const response = yield call(getRequest, nextUrl, null, accessToken)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchUserIllustSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextUserIllustFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_USER_ILLUST_COLUMN, addUserIllustColumn)
  yield takeEvery(Actions.FETCH_USER_ILLUST, fetchUserIllust)
  yield takeEvery(Actions.FETCH_NEXT_USER_ILLUST, fetchNextUserIllust)
}
