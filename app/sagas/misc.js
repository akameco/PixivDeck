import {ipcRenderer, shell} from 'electron'
import {select, fork, call, takeEvery} from 'redux-saga/effects'
import {getIllust, getUser} from 'reducers'
import * as Actions from 'constants/misc'

type hasId = {
	id: number
}

function * shareTwitter({id}: hasId) {
	try {
		const state = yield select()
		const illust = getIllust(state, id)
		const user = getUser(state, illust.user)
		const encodedTitle = encodeURIComponent(illust.title)
		const encodedName = encodeURIComponent(user.name)
		const url = `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fmode%3Dmedium%26illust_id%3D${id}&ref_src=twsrc%5Etfw&text=${encodedTitle}%20%7C%20${encodedName}%20%23pixiv%20%23PixivDeck&tw_p=tweetbutton&url=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fillust_id%3D${id}%26mode%3Dmedium`
		ipcRenderer.send('tweet', url)
	} catch (err) { }
}

function * openPixiv({id}: hasId) {
	yield call(shell.openExternal, `http://www.pixiv.net/member_illust.php?mode=medium&illust_id=${id}`)
}

function * shareTwitterSage() {
	yield * takeEvery(Actions.SHARE_TWITTER, shareTwitter)
}

function * openPixivSage() {
	yield * takeEvery(Actions.OPEN_PIXIV, openPixiv)
}

function * root() {
	yield fork(shareTwitterSage)
	yield fork(openPixivSage)
}

export default root
