// @flow
export type RankingModeType = 'daily' | 'weekly' | 'monthly';

export type WorkType = {
	id: number,
	title: string,
	caption: string,
	tags: Array<string>,
	user: number,
	imageUrls: Object
}

export type UserType = {
	name: string,
	account: string,
	profileImageUrls: Object
}

export type ColumnType = {
	id: number,
	title: ?string,
	works: Array<number>,
	query: {
		type: string,
		opts: ?Object
	}
}

export type ManageActionType =
	| {type: 'TOGGLE_MODAL'}
	| {type: 'OPEN_MODAL'}
	| {type: 'CLOSE_MODAL'}
	| {type: 'CHANGE_RANKING_MODE', mode: RankingModeType};

export type ranking = {
	mode: RankingModeType
};

export type ManageStateType = {
	isModal: bool,
	ranking: ranking
};
