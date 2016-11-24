// @flow
import url from 'url';
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import {normalize} from 'normalizr';
import {delay} from '../utils';
import type {Store, Action, Dispatch, Params, ColumnType} from '../types';
import Ipc from '../repo/ipc';
import Schemas from '../schemas';

function setQuery(id: number, params: any): Action {
	return {type: 'SET_QUERY', id, params};
}

async function sendIllusts(dispatch: Dispatch, id: number, res: Object) {
	const camelizedJson = camelizeKeys(res);
	const {nextUrl, illusts} = camelizedJson;
	const params: Params | Object | void = nextUrl ? url.parse(nextUrl, true).query : {};
	const response = normalize(illusts, Schemas.ILLUSTS);
	await dispatch({type: 'SUCCESS_IPC_REQUEST', response});
	await dispatch({type: 'RECIEVE_ILLUSTS', id, illusts: response.result});
	dispatch(setQuery(id, params));
}

async function orderSend(columns: Array<ColumnType>) {
	for (const c of columns) {
		await Ipc.reqestColumn(c.id, c.query);
		await delay(200); // eslint-disable-line babel/no-await-in-loop
	}
}

export default (store: Store) => {
	const dispatch = store.dispatch;

	ipcRenderer.on('LOGIN_SUCCESS', () => {
		const {columns} = store.getState();
		orderSend(columns);
	});

	ipcRenderer.on('LOGIN_FAILED', () => {
		dispatch({type: 'LOGIN_FAILED'});
	});

	ipcRenderer.on('logout', () => {
		dispatch({type: 'LOGOUT'});
	});

	['ranking', 'userIllusts', 'favoriteIllusts', 'search', 'illustFollow'].forEach(x => {
		ipcRenderer.on(x, (ev, data) => {
			sendIllusts(dispatch, data.id, data.res);
		});
	});

	ipcRenderer.on('illust', (ev, data) => {
		const res = data.response[0];
		const camelizedJson = camelizeKeys(res);
		const normalizedJson = normalize(camelizedJson, Schemas.ILLUST);
		dispatch({type: 'SUCCESS_IPC_REQUEST', response: normalizedJson});
	});
};
