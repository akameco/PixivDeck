// @flow
import type {Action} from '../types'
import type {Params, Endpoint} from '../types/column'

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
