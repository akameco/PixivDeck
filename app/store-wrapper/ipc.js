// @flow
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import {normalize} from 'normalizr';
import type {Store, Dispatch} from '../types';
import Schemas from '../schemas';

function format(res: Object) {
	const camelizedJson = camelizeKeys(res);
	return normalize(camelizedJson, Schemas.WORK_ARRAY);
}

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;

	function send(id: number, response: Object) {
		setImmediate(() => {
			dispatch({type: 'SUCCESS_IPC_REQUEST', response});
		});
		setImmediate(() => {
			dispatch({type: 'RECIEVE_WORKS', id, works: response.result});
		});
	}

	ipcRenderer.on('SUCCESS_LOGINED', () => {
		dispatch({type: 'SUCCESS_LOGINED'});
	});

	ipcRenderer.on('logout', () => {
		dispatch({type: 'LOGOUT'});
	});

	ipcRenderer.on('ranking', (ev, data) => {
		const res = data.res.works.map(v => v.work);
		send(data.id, format(res));
	});

	ipcRenderer.on('favoriteWorks', (ev, data) => {
		const res = data.res.response.map(v => v.work);
		send(data.id, format(res));
	});

	ipcRenderer.on('search', (ev, data) => {
		const res = data.res.response;
		send(data.id, format(res));
	});

	ipcRenderer.on('userWorks', (ev, data) => {
		const res = data.res.response;
		send(data.id, format(res));
	});

	ipcRenderer.on('work', (ev, data) => {
		const res = data.response[0];
		const camelizedJson = camelizeKeys(res);
		const normalizedJson = normalize(camelizedJson, Schemas.WORK);
		dispatch({type: 'SUCCESS_IPC_REQUEST', response: normalizedJson});
	});
};
