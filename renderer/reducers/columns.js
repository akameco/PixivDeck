// @flow
import {merge, union} from 'lodash';
import type {ColumnType} from '../actions/type';
import type {ColumnAction} from '../actions/column';

type Column = ColumnType;
type State = Array<Column>;

function column(state: Column, action: ColumnAction): Column {
	if (state.id !== action.id) {
		return state;
	}

	switch (action.type) {
		case 'NEXT_PAGE': {
			const page = state.query.opts.page + 1;
			return merge({}, state, {query: {opts: {page}}});
		}
		case 'RECIEVE_WORKS':
			if (state.works) {
				return merge({}, state, {works: union(state.works, action.works)});
			}
			return {...state, works: [...action.works]};
		default:
			return state;
	}
}

export default function columns(state: State = [], action: ColumnAction): State {
	switch (action.type) {
		case 'ADD_COLUMN':
			return [...state, {id: action.id, query: action.query, title: action.title}];
		case 'CLOSE_COLUMN':
			return state.filter(t => t.id !== action.id);
		case 'NEXT_PAGE':
			return state.map((t: Column) => column(t, action));
		case 'RECIEVE_WORKS':
			return state.map((t: Column) => column(t, action));
		default:
			return state;
	}
}
