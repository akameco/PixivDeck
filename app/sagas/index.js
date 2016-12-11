// @flow
import {fork} from 'redux-saga/effects'
import auth from './auth'
import minBookmarks from './minBookmarks'
import nextColumnPage from './nextColumnPage'
import column from './column'
import illust from './illust'

function * root(): Generator<*, *, *> {
	yield fork(auth)
	yield fork(minBookmarks)
	yield fork(nextColumnPage)
	yield fork(column)
	yield fork(illust)
}

export default root
