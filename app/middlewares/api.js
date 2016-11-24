// @flow
import {ipcRequest} from '../actions';
import type {Action, Dispatch} from '../types';
import Ipc from '../repo/ipc';

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'ADD_COLUMN' && action.query && action.query.type !== 'history') {
		next(action);
		Ipc.reqestColumn(action.id, action.query);
		return next(ipcRequest());
	}
	return next(action);
};
