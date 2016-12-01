// @flow
import url from 'url'
import {camelizeKeys} from 'humps'
import {normalize} from 'normalizr'
import Schemas from '../schemas'
import Pixiv from '../repo/pixiv'
import type {
	Action,
	State,
	Dispatch,
	Query,
	Params,
	Illust,
	Illusts,
	Endpoint,
	ColumnType,
} from '../types'

export const setPrams = (id: number, params: Params): Action => (
	{type: 'SET_PARAMS', id, params}
)

export const addColumnIllusts = (id: number, ids: number[]): Action => (
	{type: 'ADD_COLUMN_ILLUSTS', id, ids}
)

export function addColumn(
	endpoint: Endpoint,
	query: $Subtype<Query>,
	title: string,
	timer: number,
): Action {
	const id = Date.now()
	return {
		type: 'ADD_COLUMN',
		endpoint,
		id,
		title,
		timer,
		query,
	}
}

export const closeColumn = (id: number): Action => (
	{type: 'CLOSE_COLUMN', id}
)

export const normalizeIllusts = (res: Object) => {
	return normalize(camelizeKeys(res).illusts, Schemas.ILLUSTS)
}

export const selectIllusts = (nums: Array<number>, illusts: Illusts) => {
	return nums.map(i => illusts[i])
}

export async function reqestColumn(column: ColumnType): Promise<*> {
	const {endpoint, query} = column
	const {id, opts, word} = query
	let res
	if (endpoint === 'illustRanking') {
		res = await Pixiv.illustRanking(opts)
	} else if (endpoint === 'illustFollow') {
		res = await Pixiv.illustFollow(opts)
	} else if (endpoint === 'userBookmarksIllust') {
		const myId = Pixiv.authInfo().user.id
		res = await Pixiv.userBookmarksIllust(myId, opts)
	} else if (endpoint === 'userIllusts') {
		if (!id) {
			throw new Error('required id')
		}
		res = await Pixiv.userIllusts(id, opts)
	} else if (endpoint === 'searchIllust') {
		if (!word) {
			throw new Error('required word')
		}
		res = await Pixiv.searchIllust(word, opts)
	} else {
		res = await Pixiv.fetch(endpoint, opts)
	}

	const params: ?Params = res.next_url ? url.parse(res.next_url, true).query : null
	return {
		response: normalizeIllusts(res),
		params,
	}
}

export function fetchColumn(column: ColumnType, updateQuery?: bool = true) {
	return async (dispatch: Dispatch, getState: () => State): Promise<Array<Illust>> => {
		const {id} = column
		const authInfo = Pixiv.authInfo()
		const {username, password} = getState().auth
		if (!authInfo && username && password) {
			await Pixiv.login(username, password)
		}
		const {response, params} = await reqestColumn(column)
		dispatch({type: 'API_REQUEST_SUCCESS', response})
		dispatch(addColumnIllusts(column.id, response.result))

		const illusts = selectIllusts(response.result, response.entities.illusts)

		if (params && updateQuery) {
			dispatch(setPrams(id, params))
		}
		return illusts
	}
}
