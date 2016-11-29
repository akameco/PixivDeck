// @flow

export type Params = {
	mode?: string,
	restrict?: 'public' | 'private',
	filter?: 'for_ios',
	offset?: number,
	max_bookmark_id?: ?number
};

type QueryType = 'searchIllust'
	| 'illustRanking'
	| 'userBookmarksIllust'
	| 'userIllusts'
	| 'history'
	| 'illustFollow'
;

export type Query = {
	type: QueryType,
	id?: number,
	word?: string,
	opts?: Params
};

export type ColumnType = {
	id: number,
	title: string,
	illusts: Array<number>,
	query: $Shape<Query>
};

export type ColumnAction =
	| {|type: 'ADD_COLUMN', id: number, title: string, query: Query|}
	| {|type: 'SET_PARAMS', id: number, params: Params|}
	| {|type: 'CLOSE_COLUMN', id: number|}
;
