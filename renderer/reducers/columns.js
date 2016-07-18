// @flow
import {merge, union} from 'lodash';
import type {ColumnType} from '../types';
import type {ColumnAction} from '../types/column';

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
		case 'INIT':
			return state.map(t => ({...t, works: []}));
		case 'ADD_COLUMN': {
			const {id, query, title} = action;
			return [
				...state,
				{id, query, title, works: []}
			];
		}
		case 'CLOSE_COLUMN':
			return state.filter(t => t.id !== action.id);
		case 'NEXT_PAGE':
			return state.map(t => column(t, action));
		case 'RECIEVE_WORKS':
			return state.map(t => column(t, action));
		default:
			return state;
	}
}
