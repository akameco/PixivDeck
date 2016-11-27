// @flow
import type {Manage, Action} from '../types';

const initManageState: Manage = {
	isLogin: false,
	isLoading: false,
	isImageView: false,
	isImgLoaded: false,
	isDrawer: false,
	isMangaView: false,
	isDropdown: false,
	currentIllustId: null,
	userId: null,
	isLoginFailure: false,
	isModal: true,
	modalType: 'LOGIN'
};

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
	isDropdown: false
};

export default function (state: Manage = initManageState, action: Action): $Shape<Manage> {
	switch (action.type) {
		case 'INIT':
			return {...state, ...closeState};
		case 'LOGIN_SUCCESS':
			return {...state, isLogin: true, isLoginFailure: false};
		case 'LOGIN_FAILED':
			return {...state, isLoginFailure: true};
		case 'LOGOUT':
			return {...state, ...closeState, isLogin: false, isLoginFailure: false, isModal: true, modalType: 'LOGIN'};
		case 'OPEN_IMAGE_VIEW':
			return {...state, ...closeState, isImageView: Boolean(state.currentIllustId)};
		case 'OPEN_MANGA_PREVIEW':
			return {...state, ...closeState, isMangaView: Boolean(state.currentIllustId)};
		case 'OPEN_MODAL':
			return {...state, ...closeState, isModal: true, modalType: action.modal};
		case 'OPEN_DROPDOWN':
			return {...state, ...closeState, isDropdown: true};
		case 'OPEN_DRAWER':
			return {...state, ...closeState, isDrawer: Boolean(action.id), userId: action.id};
		case 'TOGGLE_DROPDOWN':
			return {...state, ...closeState, isDropdown: !state.isDropdown};
		case 'CLOSE_ALL':
			return {...state, ...closeState};
		case 'START_IMG_LOADING':
			return {...state, isImgLoaded: false};
		case 'SET_IMG_LOADED':
			return {...state, isImgLoaded: true};
		case 'SELECT_WORK':
			return {...state, currentIllustId: action.id};
		case 'START_LOADING':
			return {...state, isLoading: true};
		default:
			return state;
	}
}
