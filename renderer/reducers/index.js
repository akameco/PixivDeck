// @flow
import {combineReducers} from 'redux';
import {merge} from 'lodash';
import manage from './manage';

function entities(state = {works: {}}, action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}

function result(state = [], action) {
	if (action.response && action.response.result) {
		return action.response.result;
	}
	return state;
}

export type PixivStateType = {
	currentWorkId: string | number | null
};

export type PixivActionType =
	| {type: 'currentWork', id: number | string}
	| {type: 'RECEIVE_WORKS', works: Array<Object>}
	| {type: 'CLEAR_WORKS'};

const initState = {
	currentWorkId: null
};

export function pixiv(state: PixivStateType = initState, action: PixivActionType): PixivStateType {
	switch (action.type) {
		case 'currentWork':
			return {...state, currentWorkId: action.id};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	pixiv,
	manage,
	entities,
	result
});

export default rootReducer;
