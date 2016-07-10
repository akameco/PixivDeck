// @flow
export type ManageAction =
	| {type: 'OPEN_IMAGE_VIEW'}
	| {type: 'CLOSE_IMAGE_VIEW'}
	| {type: 'OPEN_MODAL'}
	| {type: 'CLOSE_MODAL'}
	| {type: 'SELECT_WORK', id: number}
;

export function openModal(): ManageAction {
	return {type: 'OPEN_MODAL'};
}

export function closeModal(): ManageAction {
	return {type: 'CLOSE_MODAL'};
}

export function openImageView(): ManageAction {
	return {type: 'OPEN_IMAGE_VIEW'};
}

export function closeImageView(): ManageAction {
	return {type: 'CLOSE_IMAGE_VIEW'};
}
