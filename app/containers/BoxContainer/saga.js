// @flow
import { shell } from 'electron'
import { Actions } from './actionTypes'
import { call, takeEvery, type IOEffect } from 'redux-saga/effects'

function* openPixiv({ id }: { id: number }): Generator<IOEffect, void, *> {
  yield call(
    shell.openExternal,
    `http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`
  )
}

export default function* root(): Generator<IOEffect, void, *> {
  yield takeEvery(Actions.OPEN_PIXIV, openPixiv)
}
