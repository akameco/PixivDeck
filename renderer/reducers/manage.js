// @flow
import {union} from 'lodash';
import type {Manage, Action, ManageFilter} from '../types';

const initManageState: Manage = {
	isLogin: false,
	isImageView: false,
	isImgLoaded: false,
	isMangaView: false,
	isModal: false,
	isDropdown: false,
	currentWorkId: null,
	filter: {
		r18: false,
		tags: []
	},
	modalType: 'DEFAULT'
};

function filter(state: ManageFilter, action: Action): ManageFilter {
	if (action.type === 'ADD_TAG_FILTER') {
		return {
			tags: union([...state.tags, action.tag]),
			r18: state.r18
		};
	} else if (action.type === 'REMOVE_TAG_FILTER') {
		// maybe flowtype bug...
		const tag = action.tag;
		return {
			tags: state.tags.filter(t => tag !== t),
			r18: state.r18
		};
	} else if (action.type === 'SET_R18') {
		return {
			tags: state.tags,
			r18: action.show
		};
	}
	return state;
}

export default function (state: Manage = initManageState, action: Action): Manage {
	switch (action.type) {
		case 'INIT':
			return {...state, isModal: false, isDropdown: false, isMangaView: false, isImageView: false};
		case 'SUCCESS_LOGINED':
			return {...state, isLogin: true};
		case 'LOGOUT':
			return {...state, isLogin: false};
		case 'CLOSE_ALL':
			return {
				...state,
				isImageView: false,
				isMangaView: false,
				isModal: false,
				isDropdown: false
			};
		case 'OPEN_IMAGE_VIEW':
			return {...state, isImageView: Boolean(state.currentWorkId), isMangaView: false, isDropdown: false};
		case 'CLOSE_IMAGE_VIEW':
			return {...state, isImageView: false};
		case 'OPEN_MANGA_PREVIEW':
			return {...state, isMangaView: Boolean(state.currentWorkId), isImageView: false, isDropdown: false};
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
			return {...state, currentWorkId: action.id};
		case 'ADD_TAG_FILTER':
			return {...state, filter: filter(state.filter, action)};
		case 'REMOVE_TAG_FILTER':
			return {...state, filter: filter(state.filter, action)};
		case 'SET_R18':
			return {...state, filter: filter(state.filter, action)};
		default:
			return state;
	}
}
