// @flow
import {ipcRenderer} from 'electron'
import type {Dispatch, State} from '../types'
import {getIllust} from '../reducers'

export const setWallpaper = (id: number) => (dispatch: Dispatch, getState: () => State) => {
	const illust = getIllust(getState(), id)
	const img = illust.metaSinglePage.originalImageUrl
	ipcRenderer.send('wallpaper', img ? img : illust.imageUrls.large)
}
