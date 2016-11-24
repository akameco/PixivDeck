// @flow
import type {Action, Dispatch, State as S, Query, Params, ColumnType} from '../types';
import Ipc from '../repo/ipc';
import {ipcRequest} from './manage';

export function addColumn(query: Query, title: string): Action {
	const id = Date.now();
	return {
		type: 'ADD_COLUMN',
		id,
		title,
		query
	};
}

export function nextPage(id: number) {
	return async (dispatch: Dispatch, getState: () => S): Promise<*> => {
		const column: ColumnType = getState().columns.filter(v => v.id === id)[0];
		dispatch(ipcRequest());
		await Ipc.reqestColumn(id, column.query);
	};
}

export function reloadColumn(id: number) {
	return (dispatch: Dispatch) => {
		dispatch(nextPage(id));
	};
}

export function setQuery(id: number, params: Params): Action {
	return {type: 'SET_QUERY', id, params};
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
