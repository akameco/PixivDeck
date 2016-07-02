// @flow
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import type {Store, Dispatch} from 'redux';
import {receiveWorks} from '../actions';

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;

	ipcRenderer.on('ranking', (ev, data) => {
		const res = data.response[0].works.map(v => v.work);
		const camelizedJson = camelizeKeys(res);
		dispatch(receiveWorks(camelizedJson));
	});
};
