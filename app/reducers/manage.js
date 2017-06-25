// @flow
import type { Action } from 'types'
import type { Manage } from 'types/manage'

const initManageState: Manage = {
  isLoading: false,
  isImgLoaded: false,
  isDrawer: false,
  currentIllustId: null,
  userId: null,
}

type CloseState = {
  isDrawer: boolean,
}

const closeState: CloseState = {
  isDrawer: false,
}

function open(state: Manage, action: Action): $Shape<Manage> {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...closeState, isDrawer: Boolean(action.id), userId: action.id }
    default:
      return state
  }
}

function close(state: Manage, action: Action): $Shape<Manage> {
  switch (action.type) {
    case 'CLOSE_ALL':
      return { ...state, ...closeState }
    default:
      return { ...state, ...closeState }
  }
}

export default function(
  state: Manage = initManageState,
  action: Action
): $Shape<Manage> {
  if (action.type.startsWith('OPEN')) {
    return { ...state, ...open(state, action) }
  } else if (action.type.startsWith('CLOSE')) {
    return close(state, action)
  }
  switch (action.type) {
    case 'INIT':
      return { ...state, ...closeState }
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
