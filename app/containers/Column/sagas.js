// @flow
import { union } from 'lodash'
import { put, call } from 'redux-saga/effects'
import type { Response } from 'services/api'
import * as api from '../Api/sagas'

type Actions = {
  fetchSuccess: (id: *, ids: Array<number>) => *,
  fetchFailre: (id: *, error: string) => *,
  setNextUrl: (id: *, nextUrl: string) => *,
}

export function* fetchColumn(
  endpoint: ?string,
  id: *,
  actions: Actions,
  ids: Array<number>
): Generator<*, void, *> {
  try {
    if (!endpoint || endpoint === '') {
      return
    }
    const { result }: Response = yield call(api.get, endpoint, true)

    const nextIds = union(ids, result.illusts)

    yield put(actions.fetchSuccess(id, nextIds))
    yield put(actions.setNextUrl(id, result.nextUrl))
  } catch (err) {
    yield put(actions.fetchFailre(id, err))
  }
}
