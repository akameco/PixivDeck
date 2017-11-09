// @flow
import {
  SET_SHOW_ONLY_ILLUST,
  SET_SHOW_CAPTION,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  REMOVE_CACHE,
} from './actionTypes'
import type {
  SetShowOnlyIllust,
  SetShowCaption,
  AddTagFilter,
  RemoveTagFilter,
  RemoveCache,
} from './actionTypes'

export function setShowOnlyIllust(show: boolean): SetShowOnlyIllust {
  return {
    type: SET_SHOW_ONLY_ILLUST,
    show,
  }
}
export function setShowCaption(show: boolean): SetShowCaption {
  return {
    type: SET_SHOW_CAPTION,
    show,
  }
}
export function addTagFilter(): AddTagFilter {
  return {
    type: ADD_TAG_FILTER,
  }
}
export function removeTagFilter(): RemoveTagFilter {
  return {
    type: REMOVE_TAG_FILTER,
  }
}
export function removeCache(): RemoveCache {
  return {
    type: REMOVE_CACHE,
  }
}
