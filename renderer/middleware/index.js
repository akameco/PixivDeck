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

export const close = () => (next: Dispatch) => (action: Action) => {
	if (/^OPEN/.test(action.type)) {
		next({type: 'CLOSE_MODAL'});
		next({type: 'CLOSE_DROPDOWN'});
		next({type: 'CLOSE_IMAGE_VIEW'});
		next({type: 'CLOSE_MANGA_PREVIEW'});
	}
	next(action);
};
