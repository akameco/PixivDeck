// @flow
import type {Action} from '../types'
import type {Drawer} from '../types/drawer'

const initState = {
	illusts: [],
	mangas: [],
	user: null,
	profile: null,
	nextIllustUrl: null,
	nextMangaUrl: null,
}

export default function drawer(state: Drawer = initState, action: Action): Drawer {
	switch (action.type) {
		case 'DRAWER_ADD_ILLUSTS':
			return {...state, illusts: [...state.illusts, ...action.ids]}
		case 'DRAWER_ADD_MANGAS':
			return {...state, mangas: [...state.mangas, ...action.ids]}
		case 'DRAWER_ADD_USER':
			return {...state, user: action.user}
		case 'DRAWER_ADD_PROFILE':
			return {...state, profile: action.profile}
		case 'DRAWER_SET_NEXT_ILLUST_URL':
			return {...state, nextIllustUrl: action.url}
		case 'DRAWER_SET_NEXT_MANGA_URL':
			return {...state, nextMangaUrl: action.url}
		case 'CLOSE_DRAWER':
			return {...initState}
		default:
			return state
	}
}
