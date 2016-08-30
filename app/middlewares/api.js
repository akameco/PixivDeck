// @flow
import {ipcRenderer} from 'electron';
import {ipcRequest} from '../actions';
import {delay} from '../utils';
import type {Store, Action, Dispatch, Query, ColumnType} from '../types';

function ipcSend(id: number, query: Query): void {
	const {type, opts, q} = query;
	setImmediate(() => {
		if (query.type === 'search') {
			ipcRenderer.send(type, {id, q, opts});
		} else if (query.type === 'userWorks') {
			ipcRenderer.send(type, {id, userID: query.id, opts});
		} else {
			ipcRenderer.send(type, {id, opts});
		}
	});
}

function selectColumn(store: Store, id: number): ColumnType {
	return store.getState().columns.filter(v => v.id === id)[0];
}

function asyncIpcSend(id: number, query: Query) {
	return new Promise(resolve => {
		ipcSend(id, query);
		resolve();
	});
}

async function orderSend(columns: Array<ColumnType>) {
	for (const c of columns) {
		await asyncIpcSend(c.id, c.query).then(() => delay(500)); // eslint-disable-line babel/no-await-in-loop
		await delay(100); // eslint-disable-line babel/no-await-in-loop
	}
}

export default (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.type === 'NEXT_PAGE' || action.type === 'RELOAD_COLUMN') {
		next(action);
		const column = selectColumn(store, action.id);
		ipcSend(action.id, column.query);
		return next(ipcRequest());
	}

	if (action.type === 'ADD_COLUMN' && action.query && action.query.type !== 'history') {
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
		orderSend(columns);
	}

	return next(action);
};
