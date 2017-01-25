// @flow
import isEqual from 'lodash.isequal'
import union from 'lodash.union'
import type {Action} from '../types'
import type {ColumnType as Column} from '../types/column'
import {MINUTE} from '../constants/time'
import initState from './default-column-state'

type State = Array<Column>;

const resetParams = {
	offset: 0,
	maxBookmarkId: null,
}

function returnNewColumnIfNeeded(ids: number[], state: Column): Column {
	return isEqual(ids, state.ids) ? state : {...state, ids}
}

function column(state: Column, action: Action): Column {
	if (action.id && state.id !== action.id) {
		return state
	}

	switch (action.type) {
		case 'INIT':
			return {...state, params: {...state.params, ...resetParams}, ids: []}
		case 'SET_PARAMS':
			return {...state, params: {...state.params, ...action.params}}
		case 'ADD_COLUMN_ILLUSTS': {
			const ids = union([], action.ids, state.ids)
			return returnNewColumnIfNeeded(ids, state)
		}
		case 'NEXT_COLUMN_ILLUSTS': {
			const ids = union([], state.ids, action.ids)
			return returnNewColumnIfNeeded(ids, state)
		}
		case 'SET_COLUMN_MIN_BOOKMARKS':
			return {...state, minBookmarks: action.minBookmarks}
		default:
			return state
	}
}

const defaultState: $Shape<Column> = {
	ids: [],
	timer: 5 * MINUTE,
	minBookmarks: 0,
}

export default function columns(state: State = initState, action: Action): State {
	switch (action.type) {
		case 'ADD_COLUMN': {
			const {id, title, endpoint, timer} = action
			if (state.some(t => t.title === title)) {
				return state
			}
			return [
				...state,
				{...defaultState, id, endpoint, params: {...action.params}, title, timer},
			]
		}
		case 'CLOSE_COLUMN': {
			// ...flowtype?
			const id = action.id
			return state.filter(t => t.id !== id)
		}
		case 'ADD_COLUMN_ILLUSTS':
		case 'NEXT_COLUMN_ILLUSTS':
		case 'SET_COLUMN_MIN_BOOKMARKS':
		case 'INIT':
		case 'SET_PARAMS':
			return state.map(t => column(t, action))
		default:
			return state
	}
}
