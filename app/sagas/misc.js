// @flow
import {ipcRenderer, shell} from 'electron'
import {takeEvery} from 'redux-saga'
import {select, fork, call} from 'redux-saga/effects'
import type {IOEffect} from 'redux-saga/effects'
import type {State} from '../types'
import {getIllust, getUser} from '../reducers'
import * as Actions from '../constants/misc'

type hasId = {
	id: number
}

function * setWallpaper({id}: hasId): Generator<IOEffect, *, *> {
	try {
		const illust = getIllust(yield select(), id)
		const img = illust.metaSinglePage.originalImageUrl
		ipcRenderer.send('wallpaper', img ? img : illust.imageUrls.large)
	} catch (err) {}
}

function * shareTwitter({id}: hasId): Generator<IOEffect, *, *> {
	try {
		const state: State = yield select()
		const illust = getIllust(state, id)
		const user = getUser(state, illust.user)
		const encodedTitle = encodeURIComponent(illust.title)
		const encodedName = encodeURIComponent(user.name)
		const url = `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fmode%3Dmedium%26illust_id%3D${id}&ref_src=twsrc%5Etfw&text=${encodedTitle}%20%7C%20${encodedName}%20%23pixiv%20%23PixivDeck&tw_p=tweetbutton&url=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fillust_id%3D${id}%26mode%3Dmedium`
		ipcRenderer.send('tweet', url)
	} catch (err) { }
}

function * openPixiv({id}: hasId): Generator<IOEffect, *, *> {
	yield call(shell.openExternal, `http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`)
}

function * setWallpaperSaga(): Generator<*, *, *> {
	yield * takeEvery(Actions.SET_WALLPAPER, setWallpaper)
}

function * shareTwitterSage(): Generator<*, *, *> {
	yield * takeEvery(Actions.SHARE_TWITTER, shareTwitter)
}

function * openPixivSage(): Generator<*, *, *> {
	yield * takeEvery(Actions.OPEN_PIXIV, openPixiv)
}

function * root(): Generator<*, *, *> {
	yield fork(setWallpaperSaga)
	yield fork(shareTwitterSage)
	yield fork(openPixivSage)
}

export default root
