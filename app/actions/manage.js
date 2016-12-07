// @flow
import type {ThunkAction} from 'redux'; // eslint-disable-line
import type {Action} from '../types'
import type {ModalType} from '../types/manage'

export const openModal = (modal?: ModalType = 'DEFAULT'): Action => (
	{type: 'OPEN_MODAL', modal}
)
export const closeModal = (): Action => ({type: 'CLOSE_MODAL'})

export const openDrawer = (id: number): Action => ({type: 'OPEN_DRAWER', id})
export const closeDrawer = (): Action => ({type: 'CLOSE_DRAWER'})

export const openSearchField = (): Action => ({type: 'OPEN_SEARCH_FIELD'})
export const closeSearchField = (): Action => ({type: 'CLOSE_SEARCH_FIELD'})
export const toggleSearchField = (): Action => ({type: 'TOGGLE_SEARCH_FIELD'})

export const openDropdown = (): Action => ({type: 'OPEN_DROPDOWN'})
export const toggleDropdown = (): Action => ({type: 'TOGGLE_DROPDOWN'})
export const closeDropdown = (): Action => ({type: 'CLOSE_DROPDOWN'})

export const openImageView = (): Action => ({type: 'OPEN_IMAGE_VIEW'})
export const closeImageView = (): Action => ({type: 'CLOSE_IMAGE_VIEW'})

export const openMangaPreview = (): Action => ({type: 'OPEN_MANGA_PREVIEW'})
export const closeMnagaPreview = (): Action => ({type: 'CLOSE_MANGA_PREVIEW'})

export const startImgLoading = (): Action => ({type: 'START_IMG_LOADING'})
export const finishImgLoaded = (): Action => ({type: 'SET_IMG_LOADED'})
