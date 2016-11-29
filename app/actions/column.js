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
	ColumnType
} from '../types';

// Arrayに変換
export function selectIllusts(nums: Array<number>, illusts: Illusts): Array<Illust> {
	return nums.map(i => illusts[i]);
}

export function normalizeIllusts(response: Object): Object {
	// キャメルケースに変換
	const camelizedJson = camelizeKeys(response);
	// ノーマライズ
	return normalize(camelizedJson.illusts, Schemas.ILLUSTS);
}

export async function parseIllusts(dispatch: Dispatch, id: number, res: Object): Promise<Array<Illust>> {
	const json = normalizeIllusts(res);
	// Storeに反映
	dispatch({type: 'SUCCESS_API_REQUEST', response: json});
	const illusts: Illusts = json.entities.illusts;

	// 次のクエリの指定
	const params: ?Params = res.next_url ? url.parse(res.next_url, true).query : null;
	if (params) {
		await dispatch(setQuery(id, params));
	}

	return selectIllusts(json.result, illusts);
}

export async function reqestColumn(columnId: number, query: Query): Promise<*> {
	const {id, opts, word, type} = query;
	switch (type) {
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
		const res = await reqestColumn(column.id, column.query);
		const illusts = await parseIllusts(dispatch, column.id, res);
		return illusts;
	};
}

export function addColumn(query: $Subtype<Query>, title: string): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		id,
		title,
		query
	};
}

export function nextPage(column: ColumnType) {
	return async (dispatch: Dispatch): Promise<Array<Illust>> => {
		const {id, query} = column;
		const res = await reqestColumn(id, query);
		const illusts = await parseIllusts(dispatch, id, res);
		return illusts;
	};
}

export function setQuery(id: number, params: Params): Action {
	return {type: 'SET_QUERY', id, params};
}

export function closeColumn(id: number): Action {
	return {type: 'CLOSE_COLUMN', id};
}
