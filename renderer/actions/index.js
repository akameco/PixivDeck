// @flow
import {ipcRenderer} from 'electron';
import type {Dispatch} from 'redux';

export type RankingModeType = | 'daily' | 'weekly' | 'monthly';
export type LoadingType = {type: 'loading'};

export function ranking(mode: RankingModeType = 'daily', page: number = 1): LoadingType {
	ipcRenderer.send('ranking', {mode, page});
	return {
		type: 'loading'
	};
}

export type currentWorkType = {
	type: 'currentWork',
	id: string | number
};

export function currentWork(id: string): currentWorkType {
	return {
		type: 'currentWork',
		id
	};
}

export function receiveWorks(res: Array<Object>) {
	return {
		type: 'receive:works',
		works: res
	};
}

function clearWorks() {
	return {
		type: 'CLEAR_WORKS'
	};
}

export function nextRankingPage(page: number) {
	return {
		type: 'NEXT_RANKING_PAGE',
		page: page + 1
	};
}

function changeRankMode(mode: RankingModeType) {
	return {
		type: 'CHANGE_RANKING_MODE',
		mode
	};
}

export function changeRankingMode(mode: RankingModeType) {
	return (dispatch: Dispatch) => {
		dispatch(clearWorks());
		dispatch(changeRankMode(mode));
	};
}
