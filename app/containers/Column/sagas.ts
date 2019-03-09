import { union } from 'lodash'
import { put, call } from 'redux-saga/effects'
import { Response } from 'services/api'
import * as api from '../Api/sagas'

interface Actions {
  fetchSuccess: (id: any, ids: number[]) => any
  fetchFailre: (id: any, error: string) => any
  setNextUrl: (id: any, nextUrl: string) => any
}

export function* fetchColumn(
  endpoint: string | null | undefined,
  id: any,
  actions: Actions,
  ids: number[]
) {
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
interface NewActions {
  fetchSuccess: (id: any, ids: number[]) => any
  fetchFailre: (id: any, error: string) => any
}

type Order = 'overwrite' | boolean
interface Config {
  id: any
  endpoint: string | null | undefined
  ids: number[]
  order: Order
}

export function* fetchNew(
  { endpoint, id, ids, order }: Config,
  actions: NewActions
) {
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
