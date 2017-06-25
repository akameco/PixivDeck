// @flow
// eslint-disable-next-line import/order
import {
  call,
  fork,
  put,
  takeEvery,
  select,
  type IOEffect,
} from 'redux-saga/effects'
import { apiRequestSuccess } from 'actions/api'
import Api from '../api'
import { normalizeIllusts } from '../api/pixiv'
import {
  addDrawerUser,
  addDrawerProfile,
  addDrawerIllustIds,
  addDrawerMangaIds,
  setNextIllustUrl,
  setNextMangaUrl,
} from '../containers/UserDrawerContainer/actions'
import * as Actions from '../containers/UserDrawerContainer/constants'
import {
  getNextIllustUrl,
  getNextMangaUrl,
} from '../containers/UserDrawerContainer/selectors'

function* fetchUserDetail({ id }): Generator<IOEffect, void, *> {
  const { user, profile } = yield call(Api.userDetail, id)
  yield put(addDrawerUser(user))
  yield put(addDrawerProfile(profile))
}

function* watchFetchIllust(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.FETCH_ILLUST, function*({ id }) {
    try {
      const data = yield call(Api.userIllusts, id, 'illust')

      const response = normalizeIllusts(data)

      if (data.nextUrl) {
        yield put(setNextIllustUrl(data.nextUrl))
      }

      yield put(apiRequestSuccess(response))

      yield put(addDrawerIllustIds(response.result))
    } catch (err) {
      // yield put()
    }
  })
}

function* watchFetchManga(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.FETCH_MANGA, function*({ id }) {
    try {
      const data = yield call(Api.userIllusts, id, 'manga')

      const response = normalizeIllusts(data)

      if (data.nextUrl) {
        yield put(setNextIllustUrl(data.nextUrl))
      }

      yield put(apiRequestSuccess(response))

      yield put(addDrawerMangaIds(response.result))
    } catch (err) {
      // yield put()
    }
  })
}

function* fetchUserDetailWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.FETCH_USER_DETAIL, fetchUserDetail)
}

function* watchNextIllust(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.NEXT_ILLUST_PAGE, function*() {
    const url = yield select(getNextIllustUrl)

    if (url) {
      const { response, nextUrl } = yield call(Api.fetch, url)
      yield put(apiRequestSuccess(response))

      if (nextUrl) {
        yield put(setNextIllustUrl(nextUrl))
      }

      yield put(addDrawerIllustIds(response.result))
    }
  })
}

function* watchNextManga(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.NEXT_MANGA_PAGE, function*() {
    const url = yield select(getNextMangaUrl)

    if (url) {
      const { response, nextUrl } = yield call(Api.fetch, url)
      yield put(apiRequestSuccess(response))

      if (nextUrl) {
        yield put(setNextMangaUrl(nextUrl))
      }

      yield put(addDrawerMangaIds(response.result))
    }
  })
}

export default function* root(): Generator<IOEffect, void, *> {
  yield fork(fetchUserDetailWatch)
  yield fork(watchFetchIllust)
  yield fork(watchFetchManga)
  yield fork(watchNextIllust)
  yield fork(watchNextManga)
}
