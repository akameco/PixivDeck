// @flow
import isEqual from 'lodash.isequal'
import union from 'lodash.union'
import type {Action} from '../types'
import type {ColumnType as Column, Params} from '../types/column'
import initState from './default-column-state'

type State = Array<Column>;

const resetParams = (state: Params): $Shape<Params> => {
	if (state && state.maxBookmarkId) {
		return {...state, offset: 0, maxBookmarkId: null}
	}
	return {...state, offset: 0}
}

function params(state: Params, action: Action): $Shape<Params> {
	switch (action.type) {
		case 'INIT':
		case 'ADD_COLUMN':
			return {...state, ...resetParams(state)}
		case 'SET_PARAMS':
			return {...state, ...action.params}
		default:
			return state
	}
}

function column(state: Column, action: Action): $Shape<Column> {
	if (action.id && state.id !== action.id) {
		return state
	}

	switch (action.type) {
		case 'INIT':
			return {...state, params: params(state.params, action), ids: []}
		case 'SET_PARAMS':
			return {...state, params: params(state.params, action)}
		case 'ADD_COLUMN_ILLUSTS': {
			const ids = union([], action.ids, state.ids)
			return isEqual(ids, state.ids) ? state : {...state, ids}
		}
		case 'NEXT_COLUMN_ILLUSTS': {
			const ids = union([], state.ids, action.ids)
			return isEqual(ids, state.ids) ? state : {...state, ids}
		}
		case 'SET_COLUMN_MIN_BOOKMARKS':
			return {...state, minBookmarks: action.minBookmarks}
		default:
			return state
	}
}

const defaultState: $Shape<Column> = {
	ids: [],
	timer: 1000 * 60 * 5,
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
				{...defaultState, id, endpoint, params: params(action.params, action), title, timer},
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
