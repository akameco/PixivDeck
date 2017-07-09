// @flow
import { union } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
import * as api from '../Api/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { R18Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Action = {
  +id: R18Mode,
}

export function* addColumn({ id }: Action): Generator<*, void, *> {
  const modes: Array<?R18Mode> = yield select(makeSelectModes())

  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(
    addTable(`ranking-r18-${id}`, { columnId: id, type: 'RANKING_R18' })
  )
}

function* fetchRanking(action: Action) {
  const { id } = action

  try {
    const { illustIds } = yield select(makeSelectColumn(), action)

    const response = yield call(api.get, `/v1/illust/ranking?mode=${id}`, true)
    const { result } = response

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(result.illusts, illustIds)
    yield put(actions.fetchRankingR18Success(id, response, nextIds))
  } catch (err) {
    yield put(actions.fetchRankingR18Failre(id))
  }
}

function* fetchNextRanking18(action: Action) {
  const { id } = action
  try {
    const { illustIds, nextUrl } = yield select(makeSelectColumn(), action)

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
  yield takeEvery(Actions.ADD_COLUMN, addColumn)
  yield takeEvery(Actions.FETCH_RANKING_R18, fetchRanking)
  yield takeEvery(Actions.FETCH_NEXT_RANKING_R18, fetchNextRanking18)
}
