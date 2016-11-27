// @flow
export type ModalType =
	| 'DEFAULT'
	| 'ADD_COLUMN'
	| 'FILTER_TAG'
	| 'SEARCH'
	| 'LOGIN'
;

export type Manage = {|
	isLogin: bool,
	isLoginFailure: bool,
	isLoading: bool,
	isModal: bool,
	isDrawer: bool,
	isImageView: bool,
	isImgLoaded: bool,
	isMangaView: bool,
	isDropdown: bool,
	currentIllustId: ?number,
	userId: ?number,
	modalType: ModalType
|};

export type ManageAction =
	| {|type: 'OPEN_IMAGE_VIEW'|}
	| {|type: 'CLOSE_IMAGE_VIEW'|}
	| {|type: 'OPEN_MANGA_PREVIEW'|}
	| {|type: 'CLOSE_MANGA_PREVIEW'|}
	| {|type: 'OPEN_MODAL', modal?: ModalType|}
	| {|type: 'CLOSE_MODAL'|}
	| {|type: 'OPEN_DRAWER', id: number|}
	| {|type: 'CLOSE_DRAWER'|}
	| {|type: 'OPEN_DROPDOWN'|}
	| {|type: 'CLOSE_DROPDOWN'|}
	| {|type: 'TOGGLE_DROPDOWN'|}
	| {|type: 'SELECT_WORK', id: number|}
	| {|type: 'LOGIN_FAILED'|}
	| {|type: 'LOGOUT'|}
	| {|type: 'CLOSE_ALL'|}
	| {|type: 'START_IMG_LOADING'|}
	| {|type: 'SET_IMG_LOADED'|}
	| {|type: 'START_LOADING'|}
;
