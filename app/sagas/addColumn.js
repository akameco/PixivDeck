// @flow
import uuid from 'uuid'
import type { Action } from 'types'
import type { Params, Endpoint } from 'types/column'
import * as Actions from 'constants/addColumn'
import * as ENDPOINT from 'constants/endpoint'
import { MINUTE } from 'constants/time'
import { put, fork, takeEvery, type IOEffect } from 'redux-saga/effects'

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

function* searchIllustWatch(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.ADD_COLUMN_SEARCH_ILLUST, searchIllust)
}

export default function* root(): Generator<*, void, void> {
  yield fork(searchIllustWatch)
}
