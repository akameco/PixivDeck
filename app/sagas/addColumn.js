import { put, fork, takeEvery } from 'redux-saga/effects'
import type { Action } from 'types'
import type { Params, Endpoint } from 'types/column'
import * as Actions from 'constants/addColumn'
import * as ENDPOINT from 'constants/endpoint'
import * as RANKING from 'constants/ranking'
import { HOUR, MINUTE } from 'constants/time'
import Pixiv from '../api/pixiv'

const THREE_HOUR = 3 * HOUR

const addColumn = (
  endpoint: Endpoint,
  params: $Subtype<Params>,
  title: string,
  timer: number
): Action => ({
  type: 'ADD_COLUMN',
  endpoint,
  id: Date.now(),
  title,
  timer,
  params,
})

function* bookmark({ isPublic }) {
  const userId = Pixiv.authInfo().user.id
  const title = isPublic ? '公開ブックマーク' : '非公開ブックマーク'
  const params = { userId, restrict: isPublic ? 'public' : 'private' }
  yield put(addColumn(ENDPOINT.BOOKMARKS_ILLUST, params, title, MINUTE))
}

function* follow({ isPublic }) {
  const restrict = isPublic ? 'public' : 'private'
  const title = isPublic ? '新着 公開' : '新着 非公開'
  const opts = { restrict }
  yield put(addColumn(ENDPOINT.FOLLOW, opts, title, MINUTE))
}

function* searchIllust({ word }) {
  yield put(addColumn(ENDPOINT.SEARCH, { word }, word, MINUTE))
}

function* ranking({ mode }) {
  yield put(
    addColumn(
      ENDPOINT.RANKING,
      { mode },
      `${RANKING.ILLUST_RANKING[mode]}ランキング`,
      THREE_HOUR
    )
  )
}

function* r18Ranking({ mode }) {
  yield put(
    addColumn(
      ENDPOINT.RANKING,
      { mode },
      `${RANKING.ILLUST_R18_RANKING[mode]}ランキング`,
      THREE_HOUR
    )
  )
}

function* userIllust({ userId, name, account }) {
  yield put(
    addColumn(
      ENDPOINT.USER_ILLUSTS,
      { userId },
      `${name}(${account})`,
      THREE_HOUR
    )
  )
}

function* bookmarkWatch() {
  yield takeEvery(Actions.ADD_COLUMN_BOOKMARK, bookmark)
}

function* followWatch() {
  yield takeEvery(Actions.ADD_COLUMN_FOLLOW, follow)
}

function* searchIllustWatch() {
  yield takeEvery(Actions.ADD_COLUMN_SEARCH_ILLUST, searchIllust)
}

function* rankingWatch() {
  yield takeEvery(Actions.ADD_COLUMN_RANKING, ranking)
}

function* r18RankingWatch() {
  yield takeEvery(Actions.ADD_COLUMN_R18_RANKING, r18Ranking)
}

function* userIllustWatch() {
  yield takeEvery(Actions.ADD_COLUMN_USER_ILLUSTS, userIllust)
}

export default function* root() {
  yield fork(bookmarkWatch)
  yield fork(followWatch)
  yield fork(searchIllustWatch)
  yield fork(rankingWatch)
  yield fork(r18RankingWatch)
  yield fork(userIllustWatch)
}
