// @flow
import { type User } from 'types/user'
import { OPEN_DRAWER } from '../DrawerManager/constants'
import { makeSelectUserById } from './selectors'
import { fetchUserDetail, fetchDrawerIllust } from './actions'
import { put, select, fork, takeEvery, type IOEffect } from 'redux-saga/effects'

function* watchOpenDrawer(): Generator<IOEffect, void, *> {
  yield takeEvery(OPEN_DRAWER, function*({ id }) {
    try {
      const user: User = yield select(makeSelectUserById(), { id })
      // todo 非同期
      yield put(fetchUserDetail(user.id))
      yield put(fetchDrawerIllust(user.id, 'illust'))
      yield put(fetchDrawerIllust(user.id, 'manga'))
      // todo 失敗の通知
    } catch (err) {}
  })
}

export default function* rootSaga(): Generator<IOEffect, void, void> {
  try {
    yield fork(watchOpenDrawer)
  } catch (err) {
    console.log(err)
  }
}
