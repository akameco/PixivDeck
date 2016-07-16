// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import type {Store, Action, Dispatch, Query, ColumnType} from '../types';

function ipcSend(id: number, query: Query): void {
	const {type, opts, q} = query;
	if (query.type === 'search') {
		setImmediate(() => {
			ipcRenderer.send(type, {id, q, opts});
		});
	} else {
		setImmediate(() => {
			ipcRenderer.send(type, {id, opts});
		});
	}
}

function selectColumn(store: Store, id: number): ColumnType {
	return store.getState().columns.filter(v => v.id === id)[0];
}

function ipcRequest(): Action {
	return {type: 'IPC_REQUEST'};
}

export default (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.type === 'NEXT_PAGE' || action.type === 'RELOAD_COLUMN') {
		next(action);
		const column = selectColumn(store, action.id);
		ipcSend(action.id, column.query);
		return next(ipcRequest());
	}

	if (action.type === 'ADD_COLUMN' && action.query) {
		next(action);
		ipcSend(action.id, action.query);
		return next(ipcRequest());
	}

	if (action.type === 'OPEN_MANGA_PREVIEW') {
		const id = store.getState().manage.currentWorkId;
		ipcRenderer.send('work', id);
	}

	if (action.type === 'SUCCESS_LOGINED') {
		const {columns} = store.getState();
		for (const column of columns) {
			ipcSend(column.id, column.query);
		}
	}

	return next(action);
};
