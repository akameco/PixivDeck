// @flow
import type {Action} from '../types'
import type {Query, Params, Endpoint} from '../types/column'
import type {Illusts} from '../types/illust'

export const setPrams = (id: number, params: Params): Action => (
	{type: 'SET_PARAMS', id, params}
)

export const addColumnIllusts = (id: number, ids: number[]): Action => (
	{type: 'ADD_COLUMN_ILLUSTS', id, ids}
)

export const nextColumnIllusts = (id: number, ids: number[]): Action => (
	{type: 'NEXT_COLUMN_ILLUSTS', id, ids}
)

export function addColumn(
	endpoint: Endpoint,
	query: $Subtype<Query>,
	title: string,
	timer: number,
): Action {
	return {
		type: 'ADD_COLUMN',
		endpoint,
		id: Date.now(),
		title,
		timer,
		query,
	}
}

export const closeColumn = (id: number): Action => (
	{type: 'CLOSE_COLUMN', id}
)

export const selectIllusts = (nums: Array<number>, illusts: Illusts) => {
	return nums.map(i => illusts[i])
}
