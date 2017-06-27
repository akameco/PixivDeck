// @flow
import uuid from 'uuid'
import type { Action } from 'types'
import type { Params, Endpoint } from 'types/column'
import * as Actions from 'constants/addColumn'
import * as ENDPOINT from 'constants/endpoint'
import * as RANKING from 'constants/ranking'
import { HOUR, MINUTE } from 'constants/time'
import { ADD_USER_ILLUST } from '../containers/AddNewColumnButton/constants'
import API from '../api'
import { add as addTable } from '../containers/Table/actions'
import { put, fork, takeEvery, type IOEffect } from 'redux-saga/effects'

const THREE_HOUR = 3 * HOUR

const addColumn = (
  id: string,
  endpoint: Endpoint,
  params: $Subtype<Params>, // eslint-disable-line
  title: string,
  timer: number
): Action => ({
  type: 'ADD_COLUMN',
  endpoint,
  id,
  title,
  timer,
  params,
})

function* bookmark({ isPublic }) {
  const userId = API.authInfo().user.id
  const title = isPublic ? '公開ブックマーク' : '非公開ブックマーク'
  const params = { userId, restrict: isPublic ? 'public' : 'private' }
  yield put(addColumn(uuid(), ENDPOINT.BOOKMARKS_ILLUST, params, title, MINUTE))
}

function* follow({ isPublic }) {
  const restrict = isPublic ? 'public' : 'private'
  const title = isPublic ? '新着 公開' : '新着 非公開'
  const opts = { restrict }
  yield put(addColumn(uuid(), ENDPOINT.FOLLOW, opts, title, MINUTE))
}

function* searchIllust({ word }) {
  yield put(addColumn(uuid(), ENDPOINT.SEARCH, { word }, word, MINUTE))
}

function* ranking({ mode }) {
  const id = uuid()
  yield put(addTable(id))
  yield put(
    addColumn(
      id,
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
      uuid(),
      ENDPOINT.RANKING,
      { mode },
      `${RANKING.ILLUST_R18_RANKING[mode]}ランキング`,
      THREE_HOUR
    )
  )
}

function* userIllust({ user }) {
  yield put(
    addColumn(
      uuid(),
      ENDPOINT.USER_ILLUSTS,
      { userId: user.id },
      `${user.name}(${user.account})`,
      THREE_HOUR
    )
  )
}

function* bookmarkWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_BOOKMARK, bookmark)
}

function* followWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_FOLLOW, follow)
}

function* searchIllustWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_SEARCH_ILLUST, searchIllust)
}

function* rankingWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_RANKING, ranking)
}

function* r18RankingWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_R18_RANKING, r18Ranking)
}

function* userIllustWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(ADD_USER_ILLUST, userIllust)
}

export default function* root(): Generator<*, void, void> {
  yield fork(bookmarkWatch)
  yield fork(followWatch)
  yield fork(searchIllustWatch)
  yield fork(rankingWatch)
  yield fork(r18RankingWatch)
  yield fork(userIllustWatch)
}
