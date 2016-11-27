// @flow
import type {ThunkAction} from 'redux'; // eslint-disable-line
import type {Action, ModalType} from '../types';

export function openMangaPreview(): Action {
	return {type: 'OPEN_MANGA_PREVIEW'};
}

export function close(): Action {
	return {type: 'CLOSE_ALL'};
}

export function openModal(modal: ModalType = 'DEFAULT'): Action {
	return {type: 'OPEN_MODAL', modal};
}

export function closeModal(): Action {
	return {type: 'CLOSE_MODAL'};
}

export function openDrawer(id: number): Action {
	return {type: 'OPEN_DRAWER', id};
}

export function closeDrawer(): Action {
	return {type: 'CLOSE_DRAWER'};
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

export function closeMnagaPreview(): Action {
	return {type: 'CLOSE_MANGA_PREVIEW'};
}

export function startImgLoading(): Action {
	return {type: 'START_IMG_LOADING'};
}

export function finishImgLoaded(): Action {
	return {type: 'SET_IMG_LOADED'};
}
