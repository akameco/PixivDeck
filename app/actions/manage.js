// @flow
import type {ThunkAction} from 'redux'; // eslint-disable-line
import type {Action, ModalType, State, Dispatch} from '../types';

import Ipc from '../repo/ipc';

export function openMangaPreview(): ThunkAction<State, Action> {
	return (dispatch: Dispatch, getState) => {
		const id = getState().manage.currentIllustId;
		Ipc.send('illust', id);
		return dispatch({type: 'OPEN_MANGA_PREVIEW'});
	};
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

export function ipcRequest(): Action {
	return {type: 'IPC_REQUEST'};
}
