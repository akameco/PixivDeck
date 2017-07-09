// @flow
import { union } from 'lodash'
import { addTable } from 'containers/ColumnManager/actions'
import * as api from '../Api/sagas'
import * as Actions from './constants'
import * as actions from './actions'
import type { Mode } from './reducer'
import { makeSelectColumn, makeSelectModes } from './selectors'
import { put, select, call, takeEvery } from 'redux-saga/effects'

type Action = { id: Mode }

export function* addRankingColumn({ id }: Action): Generator<*, void, *> {
  const modes: Array<?Mode> = yield select(makeSelectModes())
  if (modes.every(v => v !== id)) {
    yield put(actions.addColumnSuccess(id))
  }

  yield put(addTable(`ranking-${id}`, { columnId: id, type: 'RANKING' }))
}

function* fetchRanking(action: Action) {
  const { id } = action

  try {
    const { ids } = yield select(makeSelectColumn(), action)

    const { result } = yield call(api.get, `/v1/illust/ranking?mode=${id}`)

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(ids, result.illusts)
    yield put(actions.fetchSuccess(id, nextIds))
  } catch (err) {
    yield put(actions.fetchFailre(id))
  }
}

function* fetchNextRanking(action: Action) {
  const { id } = action

  try {
    const { ids, nextUrl } = yield select(makeSelectColumn(), action)
    if (!nextUrl) {
      return
    }

    const { result } = yield call(api.get, nextUrl)

    yield put(actions.setNextUrl(id, result.nextUrl))

    const nextIds = union(ids, result.illusts)
    yield put(actions.fetchSuccess(id, nextIds))
  } catch (err) {
    yield put(actions.fetchNextFailre(id))
  }
}

export default function* root(): Generator<*, void, void> {
  yield takeEvery(Actions.ADD_COLUMN, addRankingColumn)
  yield takeEvery(Actions.FETCH, fetchRanking)
  yield takeEvery(Actions.FETCH_NEXT, fetchNextRanking)
}
