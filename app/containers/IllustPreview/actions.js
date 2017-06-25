// @flow
import type { Action } from './actionTypes.js'
import { OPEN_ILLUST_VIEWER, COLOSE_ILLUST_VIEWER } from './constants'

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
