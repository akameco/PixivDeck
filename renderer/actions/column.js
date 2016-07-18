// @flow
import type {ColumnAction, Query} from '../types/column';

type Action = ColumnAction;

export function addColumn(query: Query, title: string): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		id,
		title,
		query
	};
}

export function nextPage(id: number): Action {
	return {type: 'NEXT_PAGE', id};
}

export function reloadColumn(id: number): Action {
	return {type: 'RELOAD_COLUMN', id};
}

export function closeColumn(id: number): Action {
	return {type: 'CLOSE_COLUMN', id};
}
