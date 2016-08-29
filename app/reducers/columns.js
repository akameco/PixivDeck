// @flow
import union from 'lodash.union';
import type {Action, ColumnType, Query} from '../types';

type Column = ColumnType;
type State = Array<Column>;

function query(state: Query, action: Action): Query {
	if (action.type === 'INIT') {
		return {...state, opts: {...state.opts, page: 1}};
	} else if (action.type === 'NEXT_PAGE') {
		return {...state, opts: {...state.opts, page: state.opts.page + 1}};
	}
	return state;
}

function column(state: Column, action: Action): Column {
	if (action.id && state.id !== action.id) {
		return state;
	}

	switch (action.type) {
		case 'NEXT_PAGE': {
			return {...state, query: query(state.query, action)};
		}
		case 'RECIEVE_WORKS':
			return {...state, works: union(state.works, action.works)};
		default:
			return state;
	}
}

export default function columns(state: State = [], action: Action): State {
	switch (action.type) {
		case 'INIT':
			return state.map(t => ({...t, works: [], query: query(t.query, action)}));
		case 'ADD_COLUMN': {
			const {id, query, title} = action;
			return [
				...state,
				{id, query, title, works: []}
			];
		}
		case 'CLOSE_COLUMN': {
			// ...flowtype?
			const id = action.id;
			return state.filter(t => t.id !== id);
		}
		case 'NEXT_PAGE':
			return state.map(t => column(t, action));
		case 'RECIEVE_WORKS':
			return state.map(t => column(t, action));
		default:
			return state;
	}
}
