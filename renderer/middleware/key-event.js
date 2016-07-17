// @flow
import type {Store, Dispatch} from '../types';

export default (store: Store) => {
	const dispatch: Dispatch = store.dispatch;
	document.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			dispatch({type: 'CLOSE_MODAL'});
		}
	}, false);
};
