// @flow
import type {Dispatch} from 'redux';

type RankingModeType = | 'daily' | 'weekly' | 'monthly';

export function fetchRanking(mode: RankingModeType = 'daily', page: number = 1) {
	return {
		type: 'RANKING_REQUEST',
		mode,
		page
	};
}

export function changeRankingMode(mode: RankingModeType) {
	return async (dispatch: Dispatch) => {
		await dispatch({
			type: 'CHANGE_RANKING_MODE',
			mode
		});
		return dispatch(fetchRanking(mode, 1));
	};
}

export function nextRankingPage() {
	return async (dispatch: Dispatch, getState: Function) => {
		const {rankingMode, rankingPage} = getState().manage;
		await dispatch({
			type: 'NEXT_RANKING_PAGE',
			page: rankingPage + 1
		});
		return dispatch(fetchRanking(rankingMode, rankingPage + 1));
	};
}
