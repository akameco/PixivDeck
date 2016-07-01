// @flow
import {ipcRenderer} from 'electron';

export type RankingModeType = | 'daily' | 'weekly' | 'monthly';
export type LoadingType = {type: 'loading'};

export type PixivActionType =
	| {type: 'currentWork', id: number | string}
	| {type: 'receive:works', works: Array<Object>};

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
