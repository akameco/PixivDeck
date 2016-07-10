// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies

export type RankingModeType = | 'daily' | 'weekly' | 'monthly';
export type LoadingType = {type: 'LOADING'};

	return {
		type: 'currentWork',
		id
	};
}

export function receiveWorks(res: Array<Object>) {
	return {
		type: 'RECEIVE_WORKS',
		works: res
	};
}

export function fetchWork(id: number) {
	ipcRenderer.send('work', id);
}
