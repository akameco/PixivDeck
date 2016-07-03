// @flow
function scrollStop(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
}

function scrollStart(): void {
	const body = document.querySelector('body');
	body.style.overflow = 'auto';
}

export default store => next => action => {
	if (action.type === 'OPEN_MODAL') {
		scrollStop();
	} else if (action.type === 'CLOSE_MODAL') {
		scrollStart();
	}
	return next(action);
};
