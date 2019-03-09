import { union } from 'lodash'
import { put, select, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { User } from 'types/user'
import * as api from '../Api/sagas'
import { OPEN_DRAWER } from '../DrawerManager/constants'
import { makeSelectUserById } from '../UserById/selectors'
import * as actions from './actions'
import * as Actions from './constants'
import {
  makeSelectIllustList,
  makeSelectMangaList,
  getNextMangaUrl,
  getNextIllustUrl,
} from './selectors'

interface P {
  id: number
}

function* open({ id }) {
  try {
    const user: User = yield select(makeSelectUserById(), {
      id,
    }) // todo 非同期

    yield put(actions.fetchUserDetail(user.id))
    yield put(actions.fetchIllust(user.id))
    yield put(actions.fetchManga(user.id)) // todo 失敗の通知
  } catch (error) {}
}

function* fetchIllust(props: P) {
  try {
    const { id } = props
    const oldIds = yield select(makeSelectIllustList())
    const url = yield select(getNextIllustUrl)
    const endpoint = url ? url : `/v1/user/illusts?type=illust&user_id=${id}`
    const { result } = yield call(api.get, endpoint, true)
    yield put(actions.setNextIllustUrl(result.nextUrl))
    const nextIds = union(oldIds, result.illusts)
    yield put(actions.fetchIllustSuccess(nextIds))
  } catch (error) {
    yield put(actions.fetchIllustFailure(error))
  }
}

function* fetchManga({ id }: P) {
  try {
    const oldIds = yield select(makeSelectMangaList())
    const url = yield select(getNextMangaUrl)
    const endpoint = url ? url : `/v1/user/illusts?type=manga&user_id=${id}`
    const { result } = yield call(api.get, endpoint, true)

    if (result.nextUrl) {
      yield put(actions.setNextMangaUrl(result.nextUrl))
    }

    const nextIds = union(oldIds, result.illusts)
    yield put(actions.fetchMangaSuccess(nextIds))
  } catch (error) {
    yield put(actions.fetchMangaFailure(error))
  }
}

function* fetchUserDetail({ id }: P) {
  try {
    const endpoint = `/v1/user/detail?user_id=${id}`
    const { result } = yield call(api.get, endpoint, true)
    yield put(actions.addDrawerUser(result.user))
    yield put(actions.addDrawerProfile(result.profile))
  } catch (error) {
    // TODO
  }
}

export default function* rootSaga() {
  yield takeEvery(OPEN_DRAWER, open)
  yield takeLatest(Actions.FETCH_ILLUST, fetchIllust)
  yield takeEvery(Actions.NEXT_ILLUST_PAGE, fetchIllust)
  yield takeLatest(Actions.FETCH_MANGA, fetchManga)
  yield takeEvery(Actions.NEXT_MANGA_PAGE, fetchManga)
  yield takeEvery(Actions.FETCH_USER_DETAIL, fetchUserDetail)
}
