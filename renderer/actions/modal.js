// @flow
export type modalAction = {
	type: 'toggleModal' | 'closeModal'
};

export function toggleModal(): modalAction {
	return {type: 'toggleModal'};
}

export function closeModal(): modalAction {
	return {type: 'closeModal'};
}
