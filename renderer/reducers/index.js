// @flow
import {combineReducers} from 'redux';
import type {PixivActionType} from '../actions/';

const initState = {
	works: [],
	currentWorkId: null
};

export type pixivStateType = {
	works: Array<Object>,
	currentWorkId: string | number | null
};

export function pixiv(state: pixivStateType = initState, action: PixivActionType): pixivStateType {
	switch (action.type) {
		case 'receive:works':
			return {...state, works: [...state.works, ...action.works]};
		case 'currentWork':
			return {...state, currentWorkId: action.id};
		default:
			return state;
	}
}

export type manageStateType = {
	isModal: bool
};

const manageState = {
	isModal: false
};

export function manage(state: manageStateType = manageState, action) {
	switch (action.type) {
		case 'openModal':
			return {...state, isModal: true};
		case 'closeModal':
			return {...state, isModal: false};
		case 'toggleModal':
			return {...state, isModal: !state.isModal};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	pixiv,
	manage
});

export default rootReducer;
