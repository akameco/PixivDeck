// @flow
import type { Restrict } from './types'

import {
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_FAILURE,
} from './actionTypes'
import type {
  AddBookmarkRequest,
  AddBookmarkSuccess,
  AddBookmarkFailure,
  DeleteBookmarkRequest,
  DeleteBookmarkSuccess,
  DeleteBookmarkFailure,
} from './actionTypes'

export function addBookmarkRequest(
  id: number,
  restrict: Restrict
): AddBookmarkRequest {
  return {
    type: ADD_BOOKMARK_REQUEST,
    id,
    restrict,
  }
}
export function addBookmarkSuccess(
  id: number,
  restrict: Restrict
): AddBookmarkSuccess {
  return {
    type: ADD_BOOKMARK_SUCCESS,
    id,
    restrict,
  }
}
export function addBookmarkFailure(
  id: number,
  error: string
): AddBookmarkFailure {
  return {
    type: ADD_BOOKMARK_FAILURE,
    id,
    error,
  }
}
export function deleteBookmarkRequest(id: number): DeleteBookmarkRequest {
  return {
    type: DELETE_BOOKMARK_REQUEST,
    id,
  }
}
export function deleteBookmarkSuccess(id: number): DeleteBookmarkSuccess {
  return {
    type: DELETE_BOOKMARK_SUCCESS,
    id,
  }
}
export function deleteBookmarkFailure(
  id: number,
  error: string
): DeleteBookmarkFailure {
  return {
    type: DELETE_BOOKMARK_FAILURE,
    id,
    error,
  }
}
