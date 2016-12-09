// @flow

export type Params = {
	mode?: string,
	restrict?: 'public' | 'private',
	filter?: 'for_ios',
	offset?: number,
	userId?: number,
	illustId?: number,
	max_bookmark_id?: ?number,
	maxBookmarkId?: ?number,
	word?: string,
};

export type Endpoint =
	'/v1/search/illust'
	| '/v1/illust/ranking'
	| '/v1/user/bookmarks/illust'
	| '/v1/user/illusts'
	| '/v2/illust/follow'
;

type Ids = number[];

export type ColumnType = {
	id: number,
	endpoint: Endpoint,
	title: string,
	params: Params,
	timer: number,
	ids: Ids,
};

export type Columns = {[key: number]: ColumnType};

export type ColumnAction =
	| {|type: 'ADD_COLUMN', id: number, title: string, endpoint: Endpoint, params: Params, timer: number|}
	| {|type: 'ADD_COLUMN_ILLUSTS', id: number, ids: Ids|}
	| {|type: 'NEXT_COLUMN_ILLUSTS', id: number, ids: Ids|}
	| {|type: 'SET_PARAMS', id: number, params: Params|}
	| {|type: 'CLOSE_COLUMN', id: number|}
;
