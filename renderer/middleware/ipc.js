// @flow
import {ipcRenderer} from 'electron';
import {camelizeKeys} from 'humps';
import {Schema, arrayOf, normalize} from 'normalizr';
import type {Store, Dispatch} from 'redux';
import {receiveWorks} from '../actions';

const workSchema = new Schema('works', {idAttribute: 'id'});
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
		const action = {
			type: 'SUCCESS_TYPE',
			response: normalizedJson
		};

		dispatch(action);
		dispatch({
			type: 'ADD_RANKING_IDS',
			ids: normalizedJson.result
		});
	});
};
