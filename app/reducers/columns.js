// @flow
import union from 'lodash.union';
import type {Action, ColumnType, Query} from '../types';

type Column = ColumnType;
type State = Array<$Shape<Column>>;

function query(state: Query, action: Action): $Shape<Query> {
	switch (action.type) {
		case 'INIT':
		case 'ADD_COLUMN':
			return {...state, opts: {...state.opts, offset: 0}};
		case 'SET_QUERY':
			return {...state, opts: {...state.opts, ...action.params}};
		default:
			return state;
	}
}

function column(state: Column, action: Action): $Shape<Column> {
	if (action.id && state.id !== action.id) {
		return state;
	}

	switch (action.type) {
		case 'INIT':
			return {...state, illusts: [], query: query(state.query, action)};
		case 'SET_QUERY':
			return {...state, query: query(state.query, action)};
		case 'RECIEVE_ILLUSTS':
			return {...state, illusts: union(state.illusts, action.illusts)};
		default:
			return state;
	}
}

export default function columns(state: State = [], action: Action): State {
	switch (action.type) {
		case 'ADD_COLUMN': {
			const {id, title} = action;
			return [
				...state,
				{id, query: query(action.query, action), title, illusts: []}
			];
		}
		case 'CLOSE_COLUMN': {
			// ...flowtype?
			const id = action.id;
			return state.filter(t => t.id !== id);
		}
		case 'INIT':
		case 'RECIEVE_ILLUSTS':
		case 'SET_QUERY':
			return state.map(t => column(t, action));
		default:
			return state;
	}
}
