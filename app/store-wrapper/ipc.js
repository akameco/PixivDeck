// @flow
import url from 'url';
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import {normalize} from 'normalizr';
import type {Store, Action, Dispatch, Params} from '../types';
import Schemas from '../schemas';

function setQuery(id: number, params: any): Action {
	return {type: 'SET_QUERY', id, params};
}

function send(dispatch: Dispatch, id: number, response: Object) {
	setImmediate(() => {
		dispatch({type: 'SUCCESS_IPC_REQUEST', response});
	});
	setImmediate(() => {
		dispatch({type: 'RECIEVE_ILLUSTS', id, illusts: response.result});
	});
}

function sendIllusts(dispatch: Dispatch, id: number, res: Object) {
	const camelizedJson = camelizeKeys(res);
	const {nextUrl, illusts} = camelizedJson;
	const params: Params | any | void = nextUrl ? url.parse(nextUrl, true).query : {};
	send(dispatch, id, normalize(illusts, Schemas.ILLUSTS));
	dispatch(setQuery(id, params));
}

export default (store: Store) => {
	const dispatch = store.dispatch;

	ipcRenderer.on('SUCCESS_LOGINED', () => {
		dispatch({type: 'SUCCESS_LOGINED'});
	});

	ipcRenderer.on('logout', () => {
		dispatch({type: 'LOGOUT'});
	});

	['ranking', 'userIllusts', 'favoriteIllusts', 'search'].forEach(x => {
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
