// @flow
export type action = {
	type: 'OPEN_MODAL' | 'CLOSE_MODAL'
};

export function openModal(): action {
	return {type: 'OPEN_MODAL'};
}

export function closeModal(): action {
	return {type: 'CLOSE_MODAL'};
}
