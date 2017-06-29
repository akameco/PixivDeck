// @flow
import union from 'lodash/union'
import { addColumn } from 'containers/ColumnManager/actions'
import { getRequest } from '../../api/client'
import * as Actions from './constants'
import * as actions from './actions'
import type { R18Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

function* addRakingColumn({ mode }: { mode: R18Mode }) {
  const modes: Array<?R18Mode> = yield select(makeSelectModes())

  if (modes.every(v => v !== mode)) {
    yield put(actions.addRankingR18ColumnSuccess(mode))
  }

  yield put(
    addColumn(`ranking-r18-${mode}`, { columnId: mode, type: 'RANKING_R18' })
  )
}

function* fetchRanking(props: { id: R18Mode }) {
  const { id } = props
  const { illustIds } = yield select(makeSelectColumn(), props)

  try {
    // TODO 認証. 現在おそらくaxiosの機能で認証がうまく行ってしまっている
    const response = yield call(getRequest, `/v1/illust/ranking?mode=${id}`)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchRankingR18Success(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchRankingR18Failre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_RANKING_R18_COLUMN, addRakingColumn)
  yield takeEvery(Actions.FETCH_RANKING_R18, fetchRanking)
}
