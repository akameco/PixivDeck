// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import type {Store, Action, Dispatch} from 'redux';

export default (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.type !== 'NEXT_PAGE' && action.type !== 'ADD_COLUMN') {
		return next(action);
	}

	if (action.type === 'NEXT_PAGE') {
		next(action);
		const column = store.getState().columns.filter(v => v.id === action.id)[0];
		const {type, opts} = column.query;
		ipcRenderer.send(type, {id: action.id, opts});
	}

	if (action.type === 'ADD_COLUMN' && action.id && action.query) {
		next(action);
		const {type, opts} = action.query;
		ipcRenderer.send(type, {id: action.id, opts});
	}

	return next({type: 'IPC_REQUEST'});
};
