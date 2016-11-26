// @flow
export type Params = {
	mode?: string,
	restrict?: 'public' | 'private',
	filter?: 'for_ios',
	offset?: number
};

type QueryType = 'search'
	| 'ranking'
	| 'favoriteIllusts'
	| 'userIllusts'
	| 'history'
	| 'illustFollow'
;

export type Query = {
	type: QueryType,
	id?: number,
	q?: string,
	opts?: Params
};

export type ColumnType = {
	id: number,
	title: string,
	illusts: Array<number>,
	query: $Shape<Query>
};

export type ColumnAction =
	| {|type: 'RECEIVE_WORKS', id: number, illusts?: Array<number>|}
	| {|type: 'ADD_COLUMN', id: number, title: string, query: Query, illusts?: Array<number>|}
	| {|type: 'SET_QUERY', id: number, params: Params|}
	| {|type: 'CLOSE_COLUMN', id: number|}
;
