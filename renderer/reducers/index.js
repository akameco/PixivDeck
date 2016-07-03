// @flow
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import merge from 'lodash/merge';
// import type {RankingModeType} from '../actions/type';

const initState = {
	works: [],
	currentWorkId: null
};

export type PixivStateType = {
	works: Array<Object>,
	currentWorkId: string | number | null
};

export type PixivActionType =
	| {type: 'currentWork', id: number | string}
	| {type: 'RECEIVE_WORKS', works: Array<Object>}
	| {type: 'CLEAR_WORKS'};

function entities(state = {works: {}}, action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	if (action.type === 'CLEAR_WORKS') {
		return {...state, works: {}};
	}
	return state;
}

function result(state = [], action) {
	if (action.response && action.response.result) {
		return action.response.result;
	}
	return state;
}

export function pixiv(state: PixivStateType = initState, action: PixivActionType): PixivStateType {
	switch (action.type) {
		case 'RECEIVE_WORKS':
			return {...state, works: [...state.works, ...action.works]};
		case 'CLEAR_WORKS':
			return {...state, works: []};
		case 'currentWork':
			return {...state, currentWorkId: action.id};
		default:
			return state;
	}
}

type RankingModeType = 'daily' | 'weekly' | 'monthly';
type ManageActionType =
	| {type: 'TOGGLE_MODAL'}
	| {type: 'CLOSE_MODAL'}
	| {type: 'CHANGE_RANKING_MODE', mode: RankingModeType};

export type ManageStateType = {
	isModal: bool,
	rankingMode: RankingModeType,
	rankingPage: number,
	rankingIds: Array<number>
};

const initManageState = {
	isModal: false,
	rankingMode: 'daily',
	rankingPage: 1,
	rankingIds: []
};

export function manage(state: ManageStateType = initManageState, action: ManageActionType): ManageStateType {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {...state, isModal: true};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'TOGGLE_MODAL':
			return {...state, isModal: !state.isModal};
		case 'CHANGE_RANKING_MODE':
			return {...state, rankingMode: action.mode, rankingPage: 1};
		case 'NEXT_RANKING_PAGE':
			return {...state, rankingPage: action.page};
		case 'CLEAR_WORKS':
			return {...state, rankingIds: []};
		case 'ADD_RANKING_IDS':
			return {...state, rankingIds: [...state.rankingIds, ...action.ids]};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	routing,
	pixiv,
	manage,
	entities,
	result
});

export default rootReducer;
