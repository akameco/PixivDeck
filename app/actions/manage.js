// @flow
import type {Action} from 'types';
import type {ModalType} from 'types/manage';
import * as Actions from 'constants/manage';

export const openModal = (modal?: ModalType = 'DEFAULT'): Action => ({
  type: Actions.OPEN_MODAL,
  modal,
});
export const closeModal = (): Action => ({type: Actions.CLOSE_MODAL});

export const openDrawer = (id: number): Action => ({
  type: Actions.OPEN_DRAWER,
  id,
});
export const closeDrawer = (): Action => ({type: Actions.CLOSE_DRAWER});

export const openSearchField = (): Action => ({
  type: Actions.OPEN_SEARCH_FIELD,
});
export const closeSearchField = (): Action => ({
  type: Actions.CLOSE_SEARCH_FIELD,
});
export const toggleSearchField = (): Action => ({
  type: Actions.TOGGLE_SEARCH_FIELD,
});

export const openDropdown = (): Action => ({type: Actions.OPEN_DROPDOWN});
export const toggleDropdown = (): Action => ({type: Actions.TOGGLE_DROPDOWN});
export const closeDropdown = (): Action => ({type: Actions.CLOSE_DROPDOWN});

export const openImageView = (): Action => ({type: Actions.OPEN_IMAGE_VIEW});
export const closeImageView = (): Action => ({type: Actions.CLOSE_IMAGE_VIEW});

export const openMangaPreview = (): Action => ({
  type: Actions.OPEN_MANGA_PREVIEW,
});
export const closeMnagaPreview = (): Action => ({
  type: Actions.CLOSE_MANGA_PREVIEW,
});

export const startImgLoading = (): Action => ({
  type: Actions.START_IMG_LOADING,
});
export const finishImgLoaded = (): Action => ({
  type: Actions.FINISH_IMG_LOADED,
});

export const setCurrentIllust = (id: number): Action => ({
  type: Actions.SET_CURRENT_ILLUST,
  id,
});
