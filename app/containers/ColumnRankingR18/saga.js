// @flow
import { union } from 'lodash'
import { addColumn } from 'containers/ColumnManager/actions'
import * as api from '../Api/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { R18Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

export function* addRakingColumn({
  mode,
}: {
  mode: R18Mode,
}): Generator<*, void, *> {
  const modes: Array<?R18Mode> = yield select(makeSelectModes())

  if (modes.every(v => v !== mode)) {
    yield put(actions.addRankingR18ColumnSuccess(mode))
  }

  yield put(
    addColumn(`ranking-r18-${mode}`, { columnId: mode, type: 'RANKING_R18' })
  )
}

type Props = {
  id: R18Mode,
}

function* fetchRanking(props: Props) {
  const { id } = props

  try {
    const { illustIds } = yield select(makeSelectColumn(), props)

    const response = yield call(api.get, `/v1/illust/ranking?mode=${id}`, true)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchRankingR18Success(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchRankingR18Failre(id))
  }
}

function* fetchNextRanking18(props: Props) {
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
    yield put(actions.fetchNextRankingR18Success(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchNextRankingR18Failre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_RANKING_R18_COLUMN, addRakingColumn)
  yield takeEvery(Actions.FETCH_RANKING_R18, fetchRanking)
  yield takeEvery(Actions.FETCH_NEXT_RANKING_R18, fetchNextRanking18)
}
