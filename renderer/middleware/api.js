// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import type {Store, Action, Dispatch, Query} from '../types';

function ipcSend(id: number, query: Query) {
	const {type, opts, q} = query;
	if (query.type === 'search') {
		ipcRenderer.send(type, {id, q, opts});
	} else {
		ipcRenderer.send(type, {id, opts});
	}
}

export default (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.type === 'NEXT_PAGE') {
		next(action);
		const {id} = action;
		const column = store.getState().columns.filter(v => v.id === id)[0];
		const {type, opts} = column.query;
		ipcRenderer.send(type, {id: action.id, opts});

		return next({type: 'IPC_REQUEST'});
	}

	if (action.type === 'ADD_COLUMN' && action.id && action.query) {
		next(action);
		ipcSend(action.id, action.query);

		return next({type: 'IPC_REQUEST'});
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
