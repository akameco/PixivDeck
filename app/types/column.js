// @flow

export type Params = {
	mode?: string,
	restrict?: 'public' | 'private',
	filter?: 'for_ios',
	offset?: number,
	max_bookmark_id?: ?number
};

export type Endpoint =
	'searchIllust'
	| 'illustRanking'
	| 'userBookmarksIllust'
	| 'userIllusts'
	| 'history'
	| 'illustFollow'
;

export type Query = {
	id?: number,
	word?: string,
	opts?: Params
};

type Ids = number[];

export type ColumnType = {
	id: number,
	endpoint: Endpoint,
	title: string,
	query: $Shape<Query>,
	timer: number,
	ids: Ids,
};

export type Columns = {[key: number]: ColumnType};

export type ColumnAction =
	| {|type: 'ADD_COLUMN', id: number, title: string, endpoint: Endpoint, query: Query, timer: number|}
	| {|type: 'ADD_COLUMN_ILLUSTS', id: number, ids: Ids|}
	| {|type: 'NEXT_COLUMN_ILLUSTS', id: number, ids: Ids|}
	| {|type: 'SET_PARAMS', id: number, params: Params|}
	| {|type: 'CLOSE_COLUMN', id: number|}
;
