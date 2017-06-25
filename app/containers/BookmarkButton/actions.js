// @flow
import type { Action } from './actionTypes.js'
import { ADD_BOOKMARK_REQUEST } from './constants'

export function addBookmarkRequest(id: number, isPublic: boolean): Action {
  return {
    type: ADD_BOOKMARK_REQUEST,
    id,
    isPublic,
  }
}
