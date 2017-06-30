// @flow
import uuid from 'uuid'
import type { Action } from 'types'
import type { Params, Endpoint } from 'types/column'
import * as Actions from 'constants/addColumn'
import * as ENDPOINT from 'constants/endpoint'
import { HOUR, MINUTE } from 'constants/time'
import { ADD_USER_ILLUST } from '../containers/AddNewColumnButton/constants'
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

function* searchIllust({ word }) {
  yield put(addColumn(uuid(), ENDPOINT.SEARCH, { word }, word, MINUTE))
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

function* searchIllustWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_SEARCH_ILLUST, searchIllust)
}

function* userIllustWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(ADD_USER_ILLUST, userIllust)
}

export default function* root(): Generator<*, void, void> {
  yield fork(searchIllustWatch)
  yield fork(userIllustWatch)
}
