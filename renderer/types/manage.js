// @flow
export type ManageAction =
	| {type: 'OPEN_IMAGE_VIEW'}
	| {type: 'CLOSE_IMAGE_VIEW'}
	| {type: 'OPEN_MANGA_PREVIEW'}
	| {type: 'CLOSE_MANGA_PREVIEW'}
	| {type: 'OPEN_MODAL'}
	| {type: 'CLOSE_MODAL'}
	| {type: 'OPEN_DROPDOWN'}
	| {type: 'CLOSE_DROPDOWN'}
	| {type: 'TOGGLE_DROPDOWN'}
	| {type: 'SELECT_WORK', id: number}
	| {type: 'LOGIN', name: string, password: string}
	| {type: 'LOGOUT'}
	| {type: 'ADD_TAG_FILTER', tag: string}
	| {type: 'START_IMG_LOADING'}
	| {type: 'SET_IMG_LOADED'}
;
