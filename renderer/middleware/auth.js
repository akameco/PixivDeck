// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import type {Action, Dispatch} from 'redux';
import {addColumn} from '../actions/column';

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'LOGIN') {
		ipcRenderer.send('LOGIN', {name: action.name, password: action.password});
	}
	if (action.type === 'LOGOUT') {
		ipcRenderer.send('LOGOUT');
	}

	if (action.type === 'SUCCESS_LOGINED') {
		next(addColumn({type: 'ranking', opts: {mode: 'daily', page: 1}}, 'ranking/daily'));
		next(addColumn({type: 'ranking', opts: {mode: 'weekly', page: 1}}, 'ranking/weekly'));
		next(addColumn({type: 'ranking', opts: {mode: 'monthly', page: 1}}, 'ranking/monthly'));
		next(addColumn({type: 'favoriteWorks', opts: {publicity: 'public', page: 1}}, 'お気に入り'));
		next(addColumn({type: 'search', q: 'リゼロ5000users入り', opts: {page: 1}}, '検索/リゼロ5000users入り'));
	}

	next(action);
};
