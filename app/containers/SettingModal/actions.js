// @flow
import type { Action } from './actionTypes.js'
import { SET_SHOW_ONLY_ILLUST, SET_SHOW_CAPTION } from './constants'

export function setShowOnlyIllust(show: boolean): Action {
  return {
    type: SET_SHOW_ONLY_ILLUST,
    show,
  }
}

export function setShowCaption(show: boolean): Action {
  return {
    type: SET_SHOW_CAPTION,
    show,
  }
}
