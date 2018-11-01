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
  } catch (error) {
    yield put(actions.fetchFailre(id, error))
  }
}

type NewActions = {
  fetchSuccess: (id: *, ids: Array<number>) => *,
  fetchFailre: (id: *, error: string) => *,
}

type Order = 'overwrite' | boolean

type Config = {|
  id: *,
  endpoint: ?string,
  ids: Array<number>,
  order: Order,
|}

export function* fetchNew(
  { endpoint, id, ids, order }: Config,
  actions: NewActions
): Generator<*, void, *> {
  try {
    if (!endpoint || endpoint === '') {
      return
    }

    const { result }: Response = yield call(api.get, endpoint, true)

    // 新しく取得したイラストを配列の前に追加
    if (order === 'overwrite') {
      // TODO diffがある場合更新
      yield put(actions.fetchSuccess(id, result.illusts))
    } else {
      const nextIds = union(result.illusts, ids)
      yield put(actions.fetchSuccess(id, nextIds))
    }
  } catch (error) {
    yield put(actions.fetchFailre(id, error))
  }
}
