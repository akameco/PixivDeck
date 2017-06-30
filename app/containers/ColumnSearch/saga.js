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

function* addSearchColumn({ id }: Props) {
  const ids: Array<?ColumnId> = yield select(makeSelectIds())
  if (ids.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addColumn(`search-${id}`, {
      columnId: id,
      type: 'SEARCH',
    })
  )
}

function* fetchSearch(props: Props) {
  const { id } = props
  try {
    const { illustIds } = yield select(makeSelectColumn(), props)

    const info = yield select(makeSelectInfo())
    // TODO
    const { accessToken } = yield call(fetchAuth, info)

    const response = yield call(
      getRequest,
      `/v1/search/illust?word=${id}&search_target=partial_match_for_tags&sort=date_desc`,
      null,
      accessToken
    )
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchFailre(id))
  }
}

function* fetchNextSearch(props: Props) {
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
    yield put(actions.fetchNextSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addSearchColumn)
  yield takeEvery(Actions.FETCH, fetchSearch)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextSearch)
}
