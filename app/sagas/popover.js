// @flow
// eslint-disable-next-line import/order
import { put, fork, call, take, type IOEffect } from 'redux-saga/effects'
import {
  addPopover,
  clearPopover,
} from '../containers/UserPopoverContainer/actions'
import * as Actions from '../containers/UserPopoverContainer/constants'
import Api from '../api'

function* popover(id) {
  // クリア
  yield put(clearPopover())
  try {
    const type = 'illust'
    // ユーザのイラストを取得
    const { illusts } = yield call(Api.userIllusts, id, type)

    // 3件取得しストアに反映
    const limit = 3
    const popoverIllust = illusts.slice(0, limit)
    yield put(addPopover(popoverIllust))
  } catch (err) {}
}

function* popoverFlow(): Generator<IOEffect, void, *> {
  while (true) {
    const { id } = yield take(Actions.OPEN_USER_POPOVER)
    try {
      yield call(popover, id)
    } catch (err) {
      console.error(err)
    }
  }
}

function* root(): Generator<IOEffect, void, *> {
  yield fork(popoverFlow)
}

export default root
