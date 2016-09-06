// @flow
import union from 'lodash.union';
import type {Action, ColumnType, Query} from '../types';

type Column = ColumnType;
type State = Array<$Shape<Column>>;

function query(state: Query, action: Action): $Shape<Query> {
	if (action.type === 'INIT') {
		return {...state, opts: {...state.opts, offset: 0}};
	}
	if (action.type === 'SET_QUERY') {
		return {...state, opts: {...state.opts, ...action.params}};
	}
	return state;
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
			const {id, query, title} = action;
			return [
				...state,
				{id, query: {...query, offset: 0}, title, illusts: []}
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
