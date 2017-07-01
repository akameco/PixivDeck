// @flow
import { delay } from 'redux-saga'
import union from 'lodash/union'
import { addColumn } from 'containers/ColumnManager/actions'
import { getToken } from 'containers/LoginModal/saga'
import { getRequest } from 'services/api'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import {
  makeSelectColumn,
  makeSelectIds,
  makeLimitedSelectIllusts,
} from './selectors'
import { put, select, call, takeEvery, takeLatest } from 'redux-saga/effects'

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

    const accessToken = yield call(getToken)

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

function* fetchNextSearch(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { illustIds, nextUrl } = yield select(makeSelectColumn(), props)

    if (!nextUrl) {
      return
    }

    const accessToken = yield call(getToken)

    const response = yield call(getRequest, nextUrl, null, accessToken)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchNextSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextFailre(id))
  }
}

function* checkNextFetch(props: Props) {
  try {
    const illusts = yield select(makeLimitedSelectIllusts(), props)
    // 表示されているイラストが20以下なら再リクエスト
    if (illusts.length < 10) {
      yield call(fetchNextSearch, props)
      yield call(delay, 2000)
    }
  } catch (err) {
    throw err
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addSearchColumn)
  yield takeEvery(Actions.FETCH, fetchSearch)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextSearch)

  yield takeLatest(Actions.FETCH_NEXT_SUCCESS, checkNextFetch)
  yield takeLatest(Actions.FETCH_SUCCESS, checkNextFetch)
}
