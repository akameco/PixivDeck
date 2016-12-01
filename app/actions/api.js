// @flow
import {camelizeKeys} from 'humps'
import type {Dispatch, State, Illust} from '../types'
import Pixiv from '../repo/pixiv'
import {normalizeIllusts, selectIllusts, fetchColumn, addColumnIllusts} from './column'

type UserIllust = | 'illust' | 'manga';

export async function fetchUserDetail(id: number) {
	const res = await Pixiv.userDetail(id)
	return camelizeKeys(res)
}

export function fetchUserIllust(id: number, type?: UserIllust = 'illust') {
	return async (dispatch: Dispatch): Promise<Array<Illust>> => {
		const rawData = await Pixiv.userIllusts(id, {type})
		const response = normalizeIllusts(rawData)

		dispatch({type: 'API_REQUEST_SUCCESS', response})

		return selectIllusts(response.result, response.entities.illusts)
	}
}

export function addBookmark(id: number, isPublic?: bool = true) {
	return async (dispatch: Dispatch, getState: () => State): Promise<void> => {
		const opts = isPublic ? {} : {restrict: 'private'}
		await Pixiv.illustBookmarkAdd(id, opts)
		// const columns = getState().columns.filter(c => c.endpoint === 'userBookmarksIllust')
		// for (const c of columns) {
			// const res = await dispatch(fetchColumn(c, false))
			// const ids = res.map(v => v.id)
			// dispatch(addColumnIllusts(c.id, ids))
		// }
	}
}
