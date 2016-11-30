// @flow
import type {Action, Config} from '../types'

const initState = {
	isIllustComment: false,
	isIllustOnly: false,
}

export default function (state: Config = initState, action: Action): Config {
	switch (action.type) {
		case 'ILLUST_CAPTION_SHOW':
			return {...state, isIllustComment: action.isShow}
		case 'ILLUST_ONLY':
			return {...state, isIllustOnly: action.isShow}
		default:
			return state
	}
}
