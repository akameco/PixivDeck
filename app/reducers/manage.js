// @flow
import type {Manage, Action} from '../types';

const initManageState: Manage = {
	isLogin: false,
	isLoading: false,
	isImageView: false,
	isImgLoaded: false,
	isMangaView: false,
	isModal: false,
	isDropdown: false,
	currentIllustId: null,
	isLoginSuccess: false,
	modalType: 'DEFAULT'
};

export default function (state: Manage = initManageState, action: Action): $Shape<Manage> {
	switch (action.type) {
		case 'INIT':
			return {...state, isModal: false, isDropdown: false, isMangaView: false, isImageView: false};
		case 'LOGIN_SUCCESS':
			return {...state, isLogin: true, isLoginSuccess: true};
		case 'LOGIN_FAILED':
			return {...state, isLoginSuccess: false};
		case 'LOGOUT':
			return {...state, isLogin: false, isLoginSuccess: true, isDropdown: false};
		case 'CLOSE_ALL':
			return {
				...state,
				isImageView: false,
				isMangaView: false,
				isModal: false,
				isDropdown: false
			};
		case 'OPEN_IMAGE_VIEW':
			return {...state, isImageView: Boolean(state.currentIllustId), isMangaView: false, isDropdown: false};
		case 'CLOSE_IMAGE_VIEW':
			return {...state, isImageView: false};
		case 'OPEN_MANGA_PREVIEW':
			return {...state, isMangaView: Boolean(state.currentIllustId), isImageView: false, isDropdown: false};
		case 'CLOSE_MANGA_PREVIEW':
			return {...state, isMangaView: false};
		case 'OPEN_MODAL':
			return {...state, isModal: true, modalType: action.modal, isMangaView: false, isImageView: false, isDropdown: false};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'OPEN_DROPDOWN':
			return {...state, isDropdown: true};
		case 'CLOSE_DROPDOWN':
			return {...state, isDropdown: false};
		case 'TOGGLE_DROPDOWN':
			return {...state, isDropdown: !state.isDropdown};
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
