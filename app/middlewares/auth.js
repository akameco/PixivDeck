// @flow
import {ipcRenderer} from 'electron';
import type {Action, Dispatch} from '../types';

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'INIT') {
		ipcRenderer.send('init');
	}
	if (action.type === 'LOGIN') {
		ipcRenderer.send('login', {name: action.name, password: action.password});
	} else if (action.type === 'LOGOUT') {
		ipcRenderer.send('logout');
	}

	return next(action);
};
