// @flow
import type { Restrict } from './types'

export const ADD_BOOKMARK_REQUEST: 'BookmarkButton/ADD_BOOKMARK_REQUEST' =
  'BookmarkButton/ADD_BOOKMARK_REQUEST'
export const ADD_BOOKMARK_SUCCESS: 'BookmarkButton/ADD_BOOKMARK_SUCCESS' =
  'BookmarkButton/ADD_BOOKMARK_SUCCESS'
export const ADD_BOOKMARK_FAILURE: 'BookmarkButton/ADD_BOOKMARK_FAILURE' =
  'BookmarkButton/ADD_BOOKMARK_FAILURE'
export const DELETE_BOOKMARK_REQUEST: 'BookmarkButton/DELETE_BOOKMARK_REQUEST' =
  'BookmarkButton/DELETE_BOOKMARK_REQUEST'
export const DELETE_BOOKMARK_SUCCESS: 'BookmarkButton/DELETE_BOOKMARK_SUCCESS' =
  'BookmarkButton/DELETE_BOOKMARK_SUCCESS'
export const DELETE_BOOKMARK_FAILURE: 'BookmarkButton/DELETE_BOOKMARK_FAILURE' =
  'BookmarkButton/DELETE_BOOKMARK_FAILURE'

export const Actions = {
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_FAILURE,
}

export type AddBookmarkRequest = {
  type: typeof ADD_BOOKMARK_REQUEST,
  id: number,
  restrict: Restrict,
}
export type AddBookmarkSuccess = {
  type: typeof ADD_BOOKMARK_SUCCESS,
  id: number,
  restrict: Restrict,
}
export type AddBookmarkFailure = {
  type: typeof ADD_BOOKMARK_FAILURE,
  id: number,
  error: string,
}

export type DeleteBookmarkRequest = {
  type: typeof DELETE_BOOKMARK_REQUEST,
  id: number,
}
export type DeleteBookmarkSuccess = {
  type: typeof DELETE_BOOKMARK_SUCCESS,
  id: number,
}
export type DeleteBookmarkFailure = {
  type: typeof DELETE_BOOKMARK_FAILURE,
  id: number,
  error: string,
}

export type Action =
  | AddBookmarkRequest
  | AddBookmarkSuccess
  | AddBookmarkFailure
  | DeleteBookmarkRequest
  | DeleteBookmarkSuccess
  | DeleteBookmarkFailure
