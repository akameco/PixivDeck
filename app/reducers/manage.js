// @flow
import type {Manage, Action} from '../types'

const initManageState: Manage = {
	isLoading: false,
	isImageView: false,
	isImgLoaded: false,
	isDrawer: false,
	isMangaView: false,
	isDropdown: false,
	currentIllustId: null,
	userId: null,
	isModal: true,
	modalType: 'LOGIN',
}

type CloseState = {
	isImageView: bool,
	isDrawer: bool,
	isMangaView: bool,
	isModal: bool,
	isDropdown: bool
};

const closeState: CloseState = {
	isImageView: false,
	isDrawer: false,
	isMangaView: false,
	isModal: false,
	isDropdown: false,
}

function open(state: Manage, action: Action): $Shape<Manage> {
	switch (action.type) {
		case 'OPEN_IMAGE_VIEW':
			return {...state, isImageView: Boolean(state.currentIllustId)}
		case 'OPEN_MANGA_PREVIEW':
			return {...state, isMangaView: Boolean(state.currentIllustId)}
		case 'OPEN_MODAL':
			return {...state, ...closeState, isModal: true, modalType: action.modal}
		case 'OPEN_DROPDOWN':
			return {...state, ...closeState, isDropdown: true}
		case 'OPEN_DRAWER':
			return {...state, ...closeState, isDrawer: Boolean(action.id), userId: action.id}
		default:
			return state
	}
}

function close(state: Manage, action: Action): $Shape<Manage> {
	switch (action.type) {
		case 'CLOSE_IMAGE_VIEW':
			return {...state, isImageView: false}
		case 'CLOSE_MANGA_PREVIEW':
			return {...state, isMangaView: false}
		case 'CLOSE_ALL':
			return {...state, ...closeState}
		default:
			return {...state, ...closeState}
	}
}

export default function (state: Manage = initManageState, action: Action): $Shape<Manage> {
	if (/^OPEN/.test(action.type)) {
		return open(state, action)
	} else if (/^CLOSE/.test(action.type)) {
		return close(state, action)
	}
	switch (action.type) {
		case 'INIT':
			return {...state, ...closeState}
		case 'LOGOUT':
			return {...state, ...closeState, isModal: true, modalType: 'LOGIN'}
		case 'TOGGLE_DROPDOWN':
			return {...state, ...closeState, isDropdown: !state.isDropdown}
		case 'START_IMG_LOADING':
			return {...state, isImgLoaded: false}
		case 'SET_IMG_LOADED':
			return {...state, isImgLoaded: true}
		case 'SELECT_WORK':
			return {...state, currentIllustId: action.id}
		case 'START_LOADING':
			return {...state, isLoading: true}
		default:
			return state
	}
}
