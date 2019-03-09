import { shell } from 'electron'
import { call, takeEvery } from 'redux-saga/effects'
import * as Actions from './constants'

function* openPixiv({ id }: { id: number }) {
  yield call(
    shell.openExternal,
    `http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`
  )
}

export default function* root() {
  yield takeEvery(Actions.OPEN_PIXIV, openPixiv)
}
