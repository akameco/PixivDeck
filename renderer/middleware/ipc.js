// @flow
import {ipcRenderer} from 'electron'; // eslint-disable-line import/no-extraneous-dependencies
import {camelizeKeys} from 'humps';
import {Schema, arrayOf, normalize} from 'normalizr';
import type {Store, Dispatch} from 'redux';

const workSchema = new Schema('works', {idAttribute: 'id'});
const userSchema = new Schema('users', {idAttribute: 'id'});

workSchema.define({
	user: userSchema
});

export const Schemas = {
	WORK: workSchema,
	WORK_ARRAY: arrayOf(workSchema)
};

function format(res) {
	const camelizedJson = camelizeKeys(res);
	return normalize(camelizedJson, Schemas.WORK_ARRAY);
}

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;

	function send(id: number, response: Object) {
		dispatch({type: 'SUCCESS_IPC_REQUEST', response});
		dispatch({type: 'RECIEVE_WORKS', id, works: response.result});
	}

	ipcRenderer.on('SUCCESS_LOGINED', () => {
		dispatch({type: 'SUCCESS_LOGINED'});
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

	ipcRenderer.on('work', (ev, data) => {
		const res = data.response[0];
		const camelizedJson = camelizeKeys(res);
		const normalizedJson = normalize(camelizedJson, Schemas.WORK);
		dispatch({
			type: 'SUCCESS_RANKING',
			response: normalizedJson
		});
	});
};
