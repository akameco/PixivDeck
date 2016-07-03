// @flow
export type RankingModeType = | 'daily' | 'weekly' | 'monthly';
export type LoadingType = {type: 'LOADING'};

export type currentWorkType = {
	type: 'currentWork',
	id: number
};

export function currentWork(id: number): currentWorkType {
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
