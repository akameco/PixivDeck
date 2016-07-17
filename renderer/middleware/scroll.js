// @flow
import type {Action, Dispatch} from '../types';

function scrollStop(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
}

function scrollStart(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'auto';
}

export default () => (next: Dispatch) => (action: Action) => {
	if (action.type === 'OPEN_MODAL') {
		scrollStop();
	} else if (action.type === 'CLOSE_MODAL' || action.type === 'CLOSE_ALL') {
		scrollStart();
	}
	return next(action);
};
