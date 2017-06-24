// @flow
import type { Action } from 'types'
import type { Manage } from 'types/manage'

const initManageState: Manage = {
  isLoading: false,
  isImageView: false,
  isImgLoaded: false,
  isDrawer: false,
  isSearchField: false,
  isMangaView: false,
  isDropdown: false,
  currentIllustId: null,
  userId: null,
}

type CloseState = {
  isImageView: boolean,
  isDrawer: boolean,
  isSearchField: boolean,
  isMangaView: boolean,
  isDropdown: boolean,
}

const closeState: CloseState = {
  isImageView: false,
  isDrawer: false,
  isSearchField: false,
  isMangaView: false,
  isDropdown: false,
}

function open(state: Manage, action: Action): $Shape<Manage> {
  switch (action.type) {
    case 'OPEN_IMAGE_VIEW':
      return { isImageView: Boolean(state.currentIllustId) }
    case 'OPEN_MANGA_PREVIEW':
      return { isMangaView: Boolean(state.currentIllustId) }
    case 'OPEN_DROPDOWN':
      return { ...closeState, isDropdown: true }
    case 'OPEN_SEARCH_FIELD':
      return { ...closeState, isSearchField: true }
    case 'OPEN_DRAWER':
      return { ...closeState, isDrawer: Boolean(action.id), userId: action.id }
    default:
      return state
  }
}

function close(state: Manage, action: Action): $Shape<Manage> {
  switch (action.type) {
    case 'CLOSE_IMAGE_VIEW':
      return { ...state, isImageView: false }
    case 'CLOSE_MANGA_PREVIEW':
      return { ...state, isMangaView: false }
    case 'CLOSE_ALL':
      return { ...state, ...closeState }
    default:
      return { ...state, ...closeState }
  }
}

export default function(
  state: Manage = initManageState,
  action: Action,
): $Shape<Manage> {
  if (action.type.startsWith('OPEN')) {
    return { ...state, ...open(state, action) }
  } else if (action.type.startsWith('CLOSE')) {
    return close(state, action)
  }
  switch (action.type) {
    case 'INIT':
      return { ...state, ...closeState }
    case 'TOGGLE_DROPDOWN':
      return { ...state, ...closeState, isDropdown: !state.isDropdown }
    case 'TOGGLE_SEARCH_FIELD':
      return { ...state, ...closeState, isSearchField: !state.isSearchField }
    case 'START_IMG_LOADING':
      return { ...state, isImgLoaded: false }
    case 'FINISH_IMG_LOADED':
      return { ...state, isImgLoaded: true }
    case 'SET_CURRENT_ILLUST':
      return { ...state, currentIllustId: action.id }
    case 'START_LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}
