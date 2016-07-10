// @flow
import {merge, set, union} from 'lodash';
import type {Action} from '../actions/column';

type Column = {
	id: number,
	title: string,
	works?: Array<number>,
	query: {
		type: string,
		opts: {
			mode?: string,
			page: number
		}
	}
}

type State = Array<Column>;

function column(state: Column, action: Action): Column {
	if (state.id !== action.id) {
		return state;
	}

	switch (action.type) {
		case 'NEXT_PAGE':
			return set(state, 'query.opts.page', state.query.opts.page + 1);
		case 'RECIEVE_WORKS':
			if (state.works) {
				return merge({}, state, {works: union(state.works, action.works)});
			}
			return merge({}, state, {works: [...action.works]});
		default:
			return state;
	}
}

export default function columns(state: State = [], action: Action): State {
	switch (action.type) {
		case 'ADD_COLUMN':
			return [...state, {id: action.id, query: action.query, title: action.title}];
		case 'NEXT_PAGE':
			return state.map((t: Column) => column(t, action));
		case 'RECIEVE_WORKS':
			return state.map((t: Column) => column(t, action));
		default:
			return state;
	}
}
