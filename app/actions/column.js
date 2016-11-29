// @flow
import url from 'url';
import {camelizeKeys} from 'humps';
import {normalize} from 'normalizr';
import Schemas from '../schemas';
import Pixiv from '../repo/pixiv';
import type {
	Action,
	Dispatch,
	Query,
	Params,
	Illust,
	Illusts,
	Endpoint,
	ColumnType,
} from '../types';

export const setPrams = (id: number, params: Params): Action => (
	{type: 'SET_PARAMS', id, params}
);

export function addColumn(endpoint: Endpoint, query: $Subtype<Query>, title: string): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		endpoint,
		id,
		title,
		query,
	};
}

export const closeColumn = (id: number): Action => (
	{type: 'CLOSE_COLUMN', id}
);

export const normalizeIllusts = (res: Object) => {
	return normalize(camelizeKeys(res).illusts, Schemas.ILLUSTS);
};

export const selectIllusts = (nums: Array<number>, illusts: Illusts) => {
	return nums.map(i => illusts[i]);
};

export async function parseIllusts(
	dispatch: Dispatch,
	res: Object
): Promise<{illusts: Array<Illust>, params: ?Object}> {
	const json = normalizeIllusts(res);
	dispatch({type: 'API_REQUEST_SUCCESS', response: json});
	const illusts: Illusts = json.entities.illusts;

	const params: ?Params = res.next_url ? url.parse(res.next_url, true).query : null;

	return {
		illusts: json.result.map(i => illusts[i]),
		params,
	};
}

export async function reqestColumn(column: ColumnType): Promise<*> {
	const {id, opts, word} = column.query;
	switch (column.endpoint) {
		case 'illustRanking':
			return await Pixiv.illustRanking(opts);
		case 'illustFollow':
			return await Pixiv.illustFollow(opts);
		case 'userBookmarksIllust': {
			const myId = Pixiv.authInfo().user.id;
			return await Pixiv.userBookmarksIllust(myId, opts);
		}
		case 'userIllusts':
			if (!id) {
				break;
			}
			return await Pixiv.userIllusts(id, opts);
		case 'searchIllust':
			if (!word) {
				break;
			}
			return await Pixiv.searchIllust(word, opts);
		default:
			throw new Error('not match');
	}
}

export function fetchColumn(column: ColumnType) {
	return async (dispatch: Dispatch): Promise<Array<Illust>> => {
		const {id} = column;
		const res = await reqestColumn(column);
		const {illusts, params} = await parseIllusts(dispatch, res);
		if (params) {
			dispatch(setPrams(id, params));
		}
		return illusts;
	};
}
