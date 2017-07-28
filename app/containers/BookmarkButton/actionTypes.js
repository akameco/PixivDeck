// @flow
import type { Restrict } from './types'

export type ADD_BOOKMARK_REQUEST_TYPE = 'BookmarkButton/ADD_BOOKMARK_REQUEST'
export type ADD_BOOKMARK_SUCCESS_TYPE = 'BookmarkButton/ADD_BOOKMARK_SUCCESS'
export type ADD_BOOKMARK_FAILER_TYPE = 'BookmarkButton/ADD_BOOKMARK_FAILER'

export type DELETE_BOOKMARK_REQUEST_TYPE =
  'BookmarkButton/ELETE_BOOKMARK_REQUEST'
export type DELETE_BOOKMARK_SUCCESS_TYPE =
  'BookmarkButton/DELETE_BOOKMARK_SUCCESS'
export type DELETE_BOOKMARK_FAILER_TYPE =
  'BookmarkButton/DELETE_BOOKMARK_FAILER'

export type Action =
  | {|
      +type: ADD_BOOKMARK_REQUEST_TYPE | ADD_BOOKMARK_SUCCESS_TYPE,
      +id: number,
      +restrict: Restrict,
    |}
  | {|
      +type: DELETE_BOOKMARK_REQUEST_TYPE | DELETE_BOOKMARK_SUCCESS_TYPE,
      +id: number,
    |}
  | {|
      +type: ADD_BOOKMARK_FAILER_TYPE | DELETE_BOOKMARK_FAILER_TYPE,
      +id: number,
      +error: string,
    |}
