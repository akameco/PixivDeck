import { call, fork, put, takeEvery, select } from 'redux-saga/effects'
import * as Actions from 'constants/drawer'
import {
  addDrawerUser,
  addDrawerProfile,
  addDrawerIllusts,
  setNextUrl,
} from 'actions/drawer'
import { apiRequestSuccess } from 'actions/api'
import { getNextUrl } from 'reducers/drawer'
import type DrawerType from 'types/drawer'
import Api from '../api'
import { normalizeIllusts } from '../api/pixiv'

function* fetchUserDetail({ id }) {
  const { user, profile } = yield call(Api.userDetail, id)
  yield put(addDrawerUser(user))
  yield put(addDrawerProfile(profile))
}

function* fetchDrawerData(data: Object, type: DrawerType) {
  const response = normalizeIllusts(data)
  const { nextUrl } = data
  yield put(apiRequestSuccess(response))
  if (nextUrl) {
    yield put(setNextUrl(nextUrl, type))
  }
  return response
}

function* fetchDrawerIllust({ id, drawerType }) {
  const data = yield call(Api.userIllusts, id, drawerType)
  const { result } = yield call(fetchDrawerData, data, drawerType)
  yield put(addDrawerIllusts(result, drawerType))
}

function* nextDrawerPage({ drawerType }) {
  const state = yield select()
  const url = getNextUrl(drawerType, state)
  if (url) {
    const { response, nextUrl } = yield call(Api.fetch, url)
    yield put(apiRequestSuccess(response))
    if (nextUrl) {
      yield put(setNextUrl(nextUrl, drawerType))
    }
    yield put(addDrawerIllusts(response.result, drawerType))
  }
}

function* fetchDrawerIllustWatch() {
  yield takeEvery(Actions.DRAWER_FETCH_ILLUST, fetchDrawerIllust)
}

function* fetchUserDetailWatch() {
  yield takeEvery(Actions.FETCH_USER_DETAIL, fetchUserDetail)
}

function* nextDrawerPageWatch() {
  yield takeEvery(Actions.DRAWER_NEXT_PAGE, nextDrawerPage)
}

export default function* root() {
  yield fork(fetchUserDetailWatch)
  yield fork(fetchDrawerIllustWatch)
  yield fork(nextDrawerPageWatch)
}
