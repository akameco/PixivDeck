// @flow
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

export default function (state: ManageStateType = initManageState, action: ManageActionType): ManageStateType {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {...state, isModal: true};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'CHANGE_RANKING_MODE':
			return {
				...state,
				rankingMode: action.mode,
				rankingPage: 1,
				rankingIds: []
			};
		case 'NEXT_RANKING_PAGE':
			return {...state, rankingPage: action.page};
		case 'ADD_RANKING_IDS':
			return {...state, rankingIds: [...state.rankingIds, ...action.ids]};
		default:
			return state;
	}
}
