// @flow
import type {Action} from '../types'
import type {Params} from '../types/column'

export const setPrams = (id: Id, params: Params): Action => (
	{type: 'SET_PARAMS', id, params}
)

export const addColumnIllusts = (id: Id, ids: Id[]): Action => (
	{type: 'ADD_COLUMN_ILLUSTS', id, ids}
)

export const nextColumnIllusts = (id: Id, ids: Id[]): Action => (
	{type: 'NEXT_COLUMN_ILLUSTS', id, ids}
)

export const closeColumn = (id: Id): Action => (
	{type: 'CLOSE_COLUMN', id}
)

export const setColumnMinBookmarks = (id: Id, minBookmarks: number): Action => (
	{type: 'SET_COLUMN_MIN_BOOKMARKS', id, minBookmarks}
)

export const nextColumnPage = (id: Id): Action => (
	{type: 'NEXT_COLUMN_PAGE', id}
)

export const checkColumnUpdate = (id: Id): Action => (
	{type: 'CHECK_COLUMN_UPDATE', id}
)

export const refreshAllColumns = (): Action => ({type: 'REFRESH_ALL_COLUMNS'})

export const fetchColumn = (id: Id): Action => ({
	type: 'FETCH_COLUMN',
	id,
})
