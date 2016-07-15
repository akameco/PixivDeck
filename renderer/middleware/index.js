// @flow
import type {Store, Action, Dispatch} from '../types';

export const save = (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.id) {
		setImmediate(() => {
			localStorage.setItem('store', JSON.stringify(store.getState()));
		});
	}
	next(action);
};
