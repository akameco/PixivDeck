// @flow
import {ipcRenderer} from 'electron';
import type {Store, Dispatch} from '../types';

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;
	const saveState = () => {
		const s = store.getState();
		const {auth, manage, columns, filter} = s;
		const newColumns = columns.map(column => {
			if (column && column.query && column.query.opts && column.query.opts) {
				column.query.opts.offset = 0;
				if (column.query.opts.max_bookmark_id) {
					column.query.opts.max_bookmark_id = null;
				}
			}
			return column;
		});
		const json = {auth, manage, columns: newColumns, filter};
		localStorage.setItem('store', JSON.stringify(json));
	};

	// 終了時に状態を保存
	ipcRenderer.on('save', () => {
		dispatch({type: 'INIT'});
		saveState();
	});

	// リロード時に状態を保存
	window.addEventListener('beforeunload', () => {
		dispatch({type: 'INIT'});
		saveState();
	}, false);
};
