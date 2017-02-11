// @flow
export type ModalType =
	| 'DEFAULT'
	| 'ADD_COLUMN'
	| 'FILTER_TAG'
	| 'LOGIN'

export type Manage = {|
	isLoading: bool,
	isModal: bool,
	isDrawer: bool,
	isSearchField: bool,
	isImageView: bool,
	isImgLoaded: bool,
	isMangaView: bool,
	isDropdown: bool,
	currentIllustId: ?number,
	userId: ?number,
	modalType: ModalType
|}

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
	| {|type: 'SET_CURRENT_ILLUST', id: number|}
	| {|type: 'CLOSE_ALL'|}
	| {|type: 'START_IMG_LOADING'|}
	| {|type: 'FINISH_IMG_LOADED'|}
	| {|type: 'START_LOADING'|}
	| {|type: 'OPEN_SEARCH_FIELD'|}
	| {|type: 'CLOSE_SEARCH_FIELD'|}
	| {|type: 'TOGGLE_SEARCH_FIELD'|}

