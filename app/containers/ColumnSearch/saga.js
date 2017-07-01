// @flow
import { delay } from 'redux-saga'
import { union } from 'lodash'
import { addColumn } from 'containers/ColumnManager/actions'
import { getToken } from 'containers/LoginModal/saga'
import { getRequest } from 'services/api'
import * as Actions from './constants'
import * as actions from './actions'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Props = { id: ColumnId }

function* addSearchColumn({ id }: Props) {
  const ids: Array<?ColumnId> = yield select(selectors.makeSelectIds())
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

function* fetchSearch(props: Props): Generator<*, void, *> {
  const { id } = props
  try {
    const { illustIds, nextUrl } = yield select(
      selectors.makeSelectColumn(),
      props
    )

    const accessToken = yield call(getToken)

    const endpoint = nextUrl
      ? nextUrl
      : `/v1/search/illust?word=${id}&search_target=partial_match_for_tags&sort=date_desc`

    const response = yield call(getRequest, endpoint, null, accessToken)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(illustIds, result.illusts)
    yield put(actions.fetchSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchFailre(id, err))
  }
}

function* fetchUntilLimit(props: Props): Generator<*, void, *> {
  try {
    const initLen: number = yield select(selectors.makeIllustLength(), props)

    while (true) {
      yield call(fetchSearch, props)

      const len = yield select(selectors.makeIllustLength(), props)

      const nextUrl = yield select(selectors.makeSelectNextUrl(), props)

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
    yield put(actions.fetchFailre(props.id, err))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addSearchColumn)
  yield takeEvery(Actions.FETCH, fetchUntilLimit)
  yield takeEvery(Actions.FETCH_NEXT, fetchUntilLimit)
}
