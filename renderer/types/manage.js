// @flow
export type ModalType = | 'DEFAULT' | 'ADD_COLUMN' | 'FILTER_TAG' | 'SEARCH';

export type Manage = {
	isLogin: bool,
	isModal: bool,
	isImageView: bool,
	isImgLoaded: bool,
	isMangaView: bool,
	isDropdown: bool,
	currentWorkId: ?number,
	filter: {
		tags: Array<string>
	},
	modalType: ModalType
};

export type ManageAction =
	| {type: 'OPEN_IMAGE_VIEW'}
	| {type: 'CLOSE_IMAGE_VIEW'}
	| {type: 'OPEN_MANGA_PREVIEW'}
	| {type: 'CLOSE_MANGA_PREVIEW'}
	| {type: 'OPEN_MODAL', modal?: ModalType}
	| {type: 'CLOSE_MODAL'}
	| {type: 'OPEN_DROPDOWN'}
	| {type: 'CLOSE_DROPDOWN'}
	| {type: 'TOGGLE_DROPDOWN'}
	| {type: 'SELECT_WORK', id: number}
	| {type: 'LOGIN', name: string, password: string}
	| {type: 'LOGOUT'}
	| {type: 'REMOVE_TAG_FILTER', tag: string}
	| {type: 'ADD_TAG_FILTER', tag: string}
	| {type: 'START_IMG_LOADING'}
	| {type: 'SET_IMG_LOADED'}
;
