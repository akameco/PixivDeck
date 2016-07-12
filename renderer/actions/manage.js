// @flow
export type ManageAction =
	| {type: 'OPEN_IMAGE_VIEW'}
	| {type: 'CLOSE_IMAGE_VIEW'}
	| {type: 'OPEN_MODAL'}
	| {type: 'CLOSE_MODAL'}
	| {type: 'SELECT_WORK', id: number}
	| {type: 'LOGIN', name: string, password: string}
	| {type: 'LOGOUT'}
	| {type: 'ADD_TAG_FILTER', tag: string}
;

export function login(name: string, password: string): ManageAction {
	return {
		type: 'LOGIN',
		name,
		password
	};
}

export function logout(): ManageAction {
	return {type: 'LOGOUT'};
}

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

export function addTagFilter(tag: string): ManageAction {
	return {type: 'ADD_TAG_FILTER', tag};
}
