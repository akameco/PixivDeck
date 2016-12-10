// @flow
import {ipcRenderer} from 'electron'
import type {Dispatch, State} from '../types'
import {getIllust, getUser} from '../reducers'

export const shareTwitter = (id: number) => (
	dispatch: Dispatch,
	getState: () => State,
) => {
	const illust = getIllust(getState(), id)
	const user = getUser(getState(), illust.user)
	const encodedTitle = encodeURIComponent(illust.title)
	const encodedName = encodeURIComponent(user.name)
	const url = `https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fmode%3Dmedium%26illust_id%3D${id}&ref_src=twsrc%5Etfw&text=${encodedTitle}%20%7C%20${encodedName}%20%23pixiv%20%23PixivDeck&tw_p=tweetbutton&url=http%3A%2F%2Fwww.pixiv.net%2Fmember_illust.php%3Fillust_id%3D${id}%26mode%3Dmedium`
	ipcRenderer.send('tweet', url)
}
