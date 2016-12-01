// @flow
import isEqual from 'lodash.isequal'
import unionBy from 'lodash.unionby'
import type {Action, ColumnType as Column, Query, Params} from '../types'
import initState from '../default-state'

type State = Array<Column>;

function params(state: $Shape<Params>): Params {
	if (state && state.max_bookmark_id) {
		return {...state, offset: 0, max_bookmark_id: null} // eslint-disable-line camelcase
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
			const ids = unionBy(action.ids, state.ids)
			return isEqual(ids, state) ? state : {...state, ids}
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
		case 'INIT':
		case 'SET_PARAMS':
			return state.map(t => column(t, action))
		default:
			return state
	}
}
