// @flow
import type {Store, Dispatch, Action} from 'redux';
function scrollStop(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
}

function scrollStart(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'auto';
}

export default (store: Store) => (next: Dispatch) => (action: Action) => {
	if (action.type === 'OPEN_MODAL') {
		scrollStop();
	} else if (action.type === 'CLOSE_MODAL') {
		scrollStart();
	}
	return next(action);
};
