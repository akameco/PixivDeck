// @flow
import type {Store, Action, Dispatch} from '../types';
import {addHistory} from '../actions';

export const save = (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.id) {
		setImmediate(() => {
			localStorage.setItem('store', JSON.stringify(store.getState()));
		});
	}
	return next(action);
};

export const history = () => (next: Dispatch) => (action: Action) => {
	next(action);
	if (action.type === 'SELECT_WORK') {
		return next(addHistory(action.id));
	}
};
