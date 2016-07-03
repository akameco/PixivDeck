// @flow
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
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
	rankingPage: number
};

const initManageState = {
	isModal: false,
	rankingMode: 'daily',
	rankingPage: 1
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
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	routing,
	pixiv,
	manage
});

export default rootReducer;
