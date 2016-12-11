// @flow
import type {Action, State} from '../types'
import type {Params, Endpoint} from '../types/column'
import {
	apiRequestSuccess,
	fetchPixiv,
} from './api'
import {loginIfNotLogined} from './auth'

export const setPrams = (id: number, params: Params): Action => (
	{type: 'SET_PARAMS', id, params}
)

export const addColumnIllusts = (id: number, ids: number[]): Action => (
	{type: 'ADD_COLUMN_ILLUSTS', id, ids}
)

export const nextColumnIllusts = (id: number, ids: number[]): Action => (
	{type: 'NEXT_COLUMN_ILLUSTS', id, ids}
)

export const addColumn = (
	endpoint: Endpoint,
	params: $Subtype<Params>,
	title: string,
	timer: number,
): Action => ({
	type: 'ADD_COLUMN',
	endpoint,
	id: Date.now(),
	title,
	timer,
	params,
})

export const closeColumn = (id: number): Action => (
	{type: 'CLOSE_COLUMN', id}
)

export const setColumnMinBookmarks = (id: number, minBookmarks: number): Action => (
	{type: 'SET_COLUMN_MIN_BOOKMARKS', id, minBookmarks}
)

// 別のアクション
export const nextColumnPage = (id: number) => {
	return async (dispatch: Dispatch): Promise<void> => {
		const {response, params} = await dispatch(fetchPixiv(id))
		dispatch(apiRequestSuccess(response))
		dispatch(nextColumnIllusts(id, response.result))
		if (params) {
			dispatch(setPrams(id, params))
		}
	}
}

export function fetchColumn(id: number) {
	return async (dispatch: Dispatch, getState: () => State): Promise<void> => {
		await loginIfNotLogined(getState())

		const {response, params} = await dispatch(fetchPixiv(id))
		dispatch(apiRequestSuccess(response))
		dispatch(addColumnIllusts(id, response.result))

		if (params) {
			dispatch(setPrams(id, params))
		}
	}
}

export const checkColumnUpdate = (id: number) => {
	return async (dispatch: Dispatch, getState: () => State) => {
		await loginIfNotLogined(getState())

		const opts = {offset: 0, maxBookmarkId: null}
		const {response} = await dispatch(fetchPixiv(id, opts))
		dispatch(apiRequestSuccess(response))
		dispatch(addColumnIllusts(id, response.result))
	}
}

export const refreshAllColumns = () => {
	return async (dispatch: Dispatch, getState: () => State) => {
		// 全カラムの更新
		for (const column of getState().columns) {
			await dispatch(checkColumnUpdate(column.id))
		}
	}
}
