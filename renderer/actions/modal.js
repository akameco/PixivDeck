// @flow
export type modalAction = {
	type: 'OPEN_MODAL' | 'TOGGLE_MODAL' | 'CLOSE_MODAL'
};

export function openModal(): modalAction {
	return {type: 'OPEN_MODAL'};
}

export function toggleModal(): modalAction {
	return {type: 'TOGGLE_MODAL'};
}

export function closeModal(): modalAction {
	return {type: 'CLOSE_MODAL'};
}
