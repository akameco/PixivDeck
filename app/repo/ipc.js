// @flow
import {ipcRenderer} from 'electron';
import type {Query} from '../types';

export default class Ipc {
	static send(chanel: string, opts: any) {
		requestAnimationFrame(() => {
			ipcRenderer.send(chanel, opts);
		});
	}

	static async reqestColumn(id: number, query: Query): Promise<*> {
		const {type, opts, q} = query;
		requestAnimationFrame(() => {
			if (query.type === 'search') {
				ipcRenderer.send(type, {id, q, opts});
			} else if (query.type === 'userIllusts') {
				ipcRenderer.send(type, {id, userID: query.id, opts});
			} else {
				ipcRenderer.send(type, {id, opts});
			}
		});
	}
}
