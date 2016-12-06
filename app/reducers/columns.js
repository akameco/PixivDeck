// @flow
import isEqual from 'lodash.isequal'
import union from 'lodash.union'
import type {Action} from '../types'
import type {ColumnType as Column, Query, Params} from '../types/column'
import initState from './default-column-state'

type State = Array<Column>;

function params(state: $Shape<Params>): Params {
	if (state && state.maxBookmarkId) {
		return {...state, offset: 0, maxBookmarkId: null}
	}
	return {...state, offset: 0}
}

function query(state: Query, action: Action): Query {
	switch (action.type) {
		case 'INIT':
		case 'ADD_COLUMN':
			return {...state, opts: params(state.opts)}
		case 'SET_PARAMS':
			return {...state, opts: {...state.opts, ...action.params}}
		default:
			return state
	}
}

function column(state: Column, action: Action): Column {
	if (action.id && state.id !== action.id) {
		return state
	}

	switch (action.type) {
		case 'INIT':
			return {...state, query: query(state.query, action), ids: []}
		case 'SET_PARAMS':
			return {...state, query: query(state.query, action)}
		case 'ADD_COLUMN_ILLUSTS': {
			const ids = union([], action.ids, state.ids)
			return isEqual(ids, state.ids) ? state : {...state, ids}
		}
		case 'NEXT_COLUMN_ILLUSTS': {
			const ids = union([], state.ids, action.ids)
			return isEqual(ids, state.ids) ? state : {...state, ids}
		}
		default:
			return state
	}
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
				{id, endpoint, query: query(action.query, action), title, timer, ids: []},
			]
		}
		case 'CLOSE_COLUMN': {
			// ...flowtype?
			const id = action.id
			return state.filter(t => t.id !== id)
		}
		case 'ADD_COLUMN_ILLUSTS':
		case 'NEXT_COLUMN_ILLUSTS':
		case 'INIT':
		case 'SET_PARAMS':
			return state.map(t => column(t, action))
		default:
			return state
	}
}
