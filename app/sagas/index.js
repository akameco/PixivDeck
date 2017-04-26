import { fork } from 'redux-saga/effects'
import auth from './auth'
import minBookmarks from './minBookmarks'
import nextColumnPage from './nextColumnPage'
import column from './column'
import illust from './illust'
import followUser from './followUser'
import popover from './popover'
import misc from './misc'
import addColumn from './addColumn'
import drawer from './drawer'

function* root() {
  yield fork(auth)
  yield fork(minBookmarks)
  yield fork(nextColumnPage)
  yield fork(column)
  yield fork(illust)
  yield fork(followUser)
  yield fork(misc)
  yield fork(popover)
  yield fork(addColumn)
  yield fork(drawer)
}

export default root
