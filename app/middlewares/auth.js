// @flow
import {ipcRenderer} from 'electron';
import type {Action, Dispatch} from '../types';

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'INIT') {
		ipcRenderer.send('INIT');
	}
	if (action.type === 'LOGIN') {
		ipcRenderer.send('LOGIN', {name: action.name, password: action.password});
	} else if (action.type === 'LOGOUT') {
		ipcRenderer.send('LOGOUT');
	}

	return next(action);
};
