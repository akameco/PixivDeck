// @flow
import type {ManageAction} from '../actions/manage';
import type {Manage} from '../actions/type';

const initManageState = {
	isImageView: false,
	isModal: false,
	currentWorkId: null
};

export default function (state: Manage = initManageState, action: ManageAction): Manage {
	switch (action.type) {
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
		default:
			return state;
	}
}
