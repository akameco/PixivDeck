// @flow
type ManageActionType =
	| {type: 'CLOSE_MODAL'}
	| {type: 'SELECT_WORK', id: number}
;

export type ManageStateType = {
	isModal: bool,
	currentWorkId: ?number
};

const initManageState = {
	isModal: false,
	currentWorkId: null
};

export default function (state: ManageStateType = initManageState, action: ManageActionType): ManageStateType {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {...state, isModal: true};
		case 'CLOSE_MODAL':
			return {...state, isModal: false};
		case 'SELECT_WORK':
			return {...state, currentWorkId: action.id};
		// case 'NEXT_RANKING_PAGE':
		// 	return {...state, rankingPage: action.page};
		// case 'ADD_RANKING_IDS':
		// 	return {...state, rankingIds: [...state.rankingIds, ...action.ids]};
		default:
			return state;
	}
}
