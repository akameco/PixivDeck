// @flow
import type { Action } from './actionTypes.js'
import {
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILER,
} from './constants'
import type { Restrict } from './types'

export function addBookmarkRequest(id: number, restrict: Restrict): Action {
  return {
    type: ADD_BOOKMARK_REQUEST,
    id,
    restrict,
  }
}

export function addBookmarkSuccess(id: number): Action {
  return {
    type: ADD_BOOKMARK_SUCCESS,
    id,
  }
}

export function addBookmarkFailer(id: number, error: string): Action {
  return {
    type: ADD_BOOKMARK_FAILER,
    id,
    error,
  }
}
