// @flow
import type {ManageAction, ModalType} from '../types/manage';

type Action = ManageAction;

export function login(name: string, password: string): Action {
	return {
		type: 'LOGIN',
		name,
		password
	};
}

export function logout(): Action {
	return {type: 'LOGOUT'};
}

export function openModal(modal: ModalType = 'DEFAULT'): Action {
	return {type: 'OPEN_MODAL', modal};
}

export function closeModal(): Action {
	return {type: 'CLOSE_MODAL'};
}

export function openDropdown(): Action {
	return {type: 'OPEN_DROPDOWN'};
}

export function toggleDropdown(): Action {
	return {type: 'TOGGLE_DROPDOWN'};
}

export function closeDropdown(): Action {
	return {type: 'CLOSE_DROPDOWN'};
}

export function openImageView(): Action {
	return {type: 'OPEN_IMAGE_VIEW'};
}

export function closeImageView(): Action {
	return {type: 'CLOSE_IMAGE_VIEW'};
}

export function openMangaPreview(): Action {
	return {type: 'OPEN_MANGA_PREVIEW'};
}

export function closeMnagaPreview(): Action {
	return {type: 'CLOSE_MANGA_PREVIEW'};
}

export function addTagFilter(tag: string): Action {
	return {type: 'ADD_TAG_FILTER', tag};
}

export function removeTagFilter(tag: string): Action {
	return {type: 'REMOVE_TAG_FILTER', tag};
}

export function currentWork(id: number): Action {
	return {
		type: 'SELECT_WORK',
		id
	};
}

export function startImgLoading(): Action {
	return {type: 'START_IMG_LOADING'};
}

export function finishImgLoaded(): Action {
	return {type: 'SET_IMG_LOADED'};
}
