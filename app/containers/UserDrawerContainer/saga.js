// @flow
import union from 'lodash/union'
import { type User } from 'types/user'
import { getToken } from 'containers/LoginModal/saga'
import { getRequest } from 'services/api'
import { OPEN_DRAWER } from '../DrawerManager/constants'
import { makeSelectUserById } from './selectors'
import * as actions from './actions'
import * as Actions from './constants'
import {
  makeSelectIllustList,
  makeSelectMangaList,
  getNextMangaUrl,
  getNextIllustUrl,
} from './selectors'
import {
  put,
  select,
  call,
  takeEvery,
  takeLatest,
  type IOEffect,
} from 'redux-saga/effects'

type P = { id: number }

function* open({ id }): Generator<IOEffect, void, *> {
  try {
    const user: User = yield select(makeSelectUserById(), { id })
    // todo 非同期
    yield put(actions.fetchUserDetail(user.id))
    yield put(actions.fetchIllust(user.id))
    yield put(actions.fetchManga(user.id))
    // todo 失敗の通知
  } catch (err) {}
}

function* fetchIllust(props: P): Generator<*, void, *> {
  try {
    const { id } = props
    const oldIds = yield select(makeSelectIllustList())

    const accessToken = yield call(getToken)

    const url = yield select(getNextIllustUrl)

    const endpoint = url ? url : `/v1/user/illusts?type=illust&user_id=${id}`

    const response = yield call(getRequest, endpoint, null, accessToken)
    const { result } = response

    yield put(actions.setNextIllustUrl(result.nextUrl))

    const nextIds = union(oldIds, result.illusts)
    yield put(actions.fetchIllustSuccess(response, nextIds))
  } catch (err) {
    yield put(actions.fetchIllustFailure(err))
  }
}

function* fetchManga({ id }: P) {
  try {
    const oldIds = yield select(makeSelectMangaList())

    const accessToken = yield call(getToken)

    const url = yield select(getNextMangaUrl)
    const endpoint = url ? url : `/v1/user/illusts?type=manga&user_id=${id}`

    const response = yield call(getRequest, endpoint, null, accessToken)
    const { result } = response

    if (result.nextUrl) {
      yield put(actions.setNextMangaUrl(result.nextUrl))
    }

    const nextIds = union(oldIds, result.illusts)
    yield put(actions.fetchMangaSuccess(response, nextIds))
  } catch (err) {
    yield put(actions.fetchMangaFailure(err))
  }
}

function* fetchUserDetail({ id }: P): Generator<IOEffect, void, *> {
  try {
    const accessToken = yield call(getToken)
    const endpoint = `/v1/user/detail?user_id=${id}`

    const { result } = yield call(getRequest, endpoint, null, accessToken)

    yield put(actions.addDrawerUser(result.user))
    yield put(actions.addDrawerProfile(result.profile))
  } catch (err) {
    // TODO
  }
}

export default function* rootSaga(): Generator<IOEffect, void, void> {
  yield takeEvery(OPEN_DRAWER, open)

  yield takeLatest(Actions.FETCH_ILLUST, fetchIllust)
  yield takeEvery(Actions.NEXT_ILLUST_PAGE, fetchIllust)

  yield takeLatest(Actions.FETCH_MANGA, fetchManga)
  yield takeEvery(Actions.NEXT_MANGA_PAGE, fetchManga)

  yield takeEvery(Actions.FETCH_USER_DETAIL, fetchUserDetail)
}
