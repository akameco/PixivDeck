// @flow
import type { Saga } from 'redux-saga'
import { shell } from 'electron'
import * as Actions from './constants'
import { call, takeEvery } from 'redux-saga/effects'

function* openPixiv({ id }: { id: number }): Saga<void> {
  yield call(
    shell.openExternal,
    `http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`
  )
}

export default function* root(): Saga<void> {
  yield takeEvery(Actions.OPEN_PIXIV, openPixiv)
}
