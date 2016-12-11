// @flow
import type {State, Action, Dispatch} from '../types'
import type {Params} from '../types/column'
import Pixiv, {normalizeIllusts, parseUrl} from '../util/pixiv'
import {getColumn} from '../reducers'

export const apiRequestSuccess = (response: Object): Action => (
	{type: 'API_REQUEST_SUCCESS', response}
)

export const fetchPixiv = (columnId: number, params: ?Params) => {
	return async (
		dispatch: Dispatch,
		getState: () => State
	): Promise<{response: Object, params: ?Params}> => {
		const column = getColumn(getState(), columnId)
		const opts = {...column.params, ...params}
		const res = await Pixiv.fetch(column.endpoint, {params: opts})

		const nextParams: ?Params = res.nextUrl ? parseUrl(res.nextUrl) : null
		return {
			response: normalizeIllusts(res),
			params: nextParams,
		}
	}
}
