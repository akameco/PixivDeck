// @flow
import type { Action } from './actionTypes.js'
import {
  OPEN_ILLUST_VIEWER,
  COLOSE_ILLUST_VIEWER,
  START_IMG_LOADING,
  FINISH_IMG_LOADING,
} from './constants'

export function openIllustViewer(): Action {
  return {
    type: OPEN_ILLUST_VIEWER,
  }
}

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
