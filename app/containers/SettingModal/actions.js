// @flow
import type { Action } from './actionTypes.js'
import {
  SET_SHOW_ONLY_ILLUST,
  SET_SHOW_CAPTION,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  REMOVE_CACHE,
} from './constants'

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

export function addTagFilter(tag: string): Action {
  return {
    type: ADD_TAG_FILTER,
    tag,
  }
}

export function removeTagFilter(tag: string): Action {
  return {
    type: REMOVE_TAG_FILTER,
    tag,
  }
}

export function removeCache(): Action {
  return {
    type: REMOVE_CACHE,
  }
}
