// @flow
import type {Action, Query, Params} from '../types';

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

export function setQuery(id: number, params: Params): Action {
	return {type: 'SET_QUERY', id, params};
}

export function reloadColumn(id: number): Action {
	return {type: 'RELOAD_COLUMN', id};
}

export function closeColumn(id: number): Action {
	return {type: 'CLOSE_COLUMN', id};
}

export function addHistoryColumn(illusts: Array<number>): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		id,
		title: 'ヒストリー',
		illusts,
		query: {type: 'history'}
	};
}
