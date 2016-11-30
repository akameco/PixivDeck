// @flow
import {camelizeKeys} from 'humps'
import type {Dispatch, Illust} from '../types'
import Pixiv from '../repo/pixiv'
import {normalizeIllusts, selectIllusts} from './column'

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
