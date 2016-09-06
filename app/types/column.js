// @flow
export type Params = {
	mode?: string,
	restrict?: 'public' | 'private',
	filter?: 'for_ios',
	offset?: number
};

export type Query = {
	type: 'search' | 'ranking' | 'favoriteIllusts' | 'userIllusts' | 'history',
	id?: number,
	q?: string,
	opts?: $Shape<Params>
};

export type ColumnType = {
	id: number,
	title: string,
	illusts: Array<number>,
	query: $Shape<Query>
};

export type ColumnAction =
	| {type: 'RECEIVE_WORKS', id: number, illusts?: Array<number>}
	| {type: 'ADD_COLUMN', id: number, title: string, query: $Shape<Query>}
	| {type: 'RELOAD_COLUMN', id: number}
	| {type: 'NEXT_PAGE', id: number}
	| {type: 'SET_QUERY', id: number, params: Params}
	| {type: 'CLOSE_COLUMN', id: number}
;
