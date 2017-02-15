// @flow
import type {Action} from 'types'

export const setCaptionShow = (isShow: bool): Action => ({
	type: 'ILLUST_CAPTION_SHOW',
	isShow,
})

export const setOnlyIllust = (isShow: bool): Action => ({
	type: 'ILLUST_ONLY',
	isShow,
})
