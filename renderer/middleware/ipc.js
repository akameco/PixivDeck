// @flow
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import {Schema, arrayOf, normalize} from 'normalizr';
import type {Store, Dispatch} from 'redux';
import {receiveWorks} from '../actions';

const workSchema = new Schema('works', {idAttribute: 'id'});
const userSchema = new Schema('users', {idAttribute: 'id'});
workSchema.define({
	user: userSchema
});

export const Schemas = {
	WORK: workSchema,
	WORK_ARRAY: arrayOf(workSchema)
};

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;

	ipcRenderer.on('ranking', (ev, data) => {
		const res = data.response[0].works.map(v => v.work);
		const camelizedJson = camelizeKeys(res);
		const normalizedJson = normalize(camelizedJson, Schemas.WORK_ARRAY);
		dispatch({
			type: 'SUCCESS_RANKING',
			response: normalizedJson
		});
		dispatch({
			type: 'ADD_RANKING_IDS',
			ids: normalizedJson.result
		});
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
