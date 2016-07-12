// @flow
import type {ManageAction} from '../actions/manage';
import type {Manage} from '../actions/type';

const initManageState = {
	isLogin: false,
	isImageView: false,
	isModal: false,
	currentWorkId: null,
	filter: {
		tags: []
	}
};

export default function (state: Manage = initManageState, action: ManageAction): Manage {
	switch (action.type) {
		case 'SUCCESS_LOGINED':
			return {...state, isLogin: true};
		case 'LOGOUT':
			return {...state, isLogin: false};
		case 'OPEN_IMAGE_VIEW':
			return {...state, isImageView: true};
		case 'CLOSE_IMAGE_VIEW':
			return {...state, isImageView: false};
		case 'OPEN_MODAL':
			return {...state, isModal: true};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'SELECT_WORK':
			return {...state, currentWorkId: action.id};
		case 'ADD_TAG_FILTER':
			return {...state, filter: {tags: [...state.filter.tags, action.tag]}};
		default:
			return state;
	}
}
