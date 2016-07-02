// @flow
export type modalAction = {
	type: 'TOGGLE_MODAL' | 'CLOSE_MODAL'
};

export function toggleModal(): modalAction {
	return {type: 'TOGGLE_MODAL'};
}

export function closeModal(): modalAction {
	return {type: 'CLOSE_MODAL'};
}
