// @flow
import type { Action } from './actionTypes'
import {
  COLOSE_ILLUST_VIEWER,
  START_IMG_LOADING,
  FINISH_IMG_LOADING,
  OPEN_ILLUST_VIEWER,
} from './constants'

export function coloseIllustViewer(): Action {
  return {
    type: COLOSE_ILLUST_VIEWER,
  }
}

export function startImgLoading(): Action {
  return {
    type: START_IMG_LOADING,
  }
}

export function finishImgLoading(): Action {
  return {
    type: FINISH_IMG_LOADING,
  }
}

export function openIllustViewer(id: number): Action {
  return {
    type: OPEN_ILLUST_VIEWER,
    id,
  }
}
