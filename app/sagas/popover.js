// eslint-disable-next-line import/order
import { put, fork, call, take } from 'redux-saga/effects'
import { clearUserPopoverIllust, addUserPopoverIllust } from 'actions/popover'
import { OPEN_USER_POPOVER } from 'containers/UserPopoverContainer/constants'
import Api from '../api'

function* popover(id) {
  // クリア
  yield put(clearUserPopoverIllust())
  try {
    const type = 'illust'
    // ユーザのイラストを取得
    const { illusts } = yield call(Api.userIllusts, id, type)

    // 3件取得しストアに反映
    const limit = 3
    const popoverIllust = illusts.slice(0, limit)
    yield put(addUserPopoverIllust(popoverIllust))
  } catch (err) {}
}

function* popoverFlow() {
  while (true) {
    const { id } = yield take(OPEN_USER_POPOVER)
    try {
      yield call(popover, id)
    } catch (err) {
      console.error(err)
    }
  }
}

function* root() {
  yield fork(popoverFlow)
}

export default root
