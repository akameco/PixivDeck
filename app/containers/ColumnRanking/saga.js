// @flow
import uuid from 'uuid'
import union from 'lodash/union'
import { addColumn } from 'containers/ColumnManager/actions'
import { getRequest } from '../../api/client'
import * as Actions from './constants'
import * as actions from './actions'
import type { Mode } from './reducer'
import { makeSelectColumn } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

function* addRakingColumn({ mode }: { mode: Mode }) {
  const id = uuid()
  // TODO i18n
  const title = `${mode} ランキング`

  yield put(actions.addRankingColumnSuccess(id, mode, title))
  yield put(addColumn(uuid(), { columnId: id, type: 'RANKING' }))

  // 初期ロード
  yield put(actions.fetchRanking(id))
}

function* fetchRanking(props: { id: string }) {
  const { id } = props
  const { mode, illustIds } = yield select(makeSelectColumn(), props)

  try {
    const response = yield call(getRequest, `/v1/illust/ranking?mode=${mode}`)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchRankingSuccess(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchRankingFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_RANKING_COLUMN, addRakingColumn)
  yield takeEvery(Actions.FETCH_RANKING, fetchRanking)
}
