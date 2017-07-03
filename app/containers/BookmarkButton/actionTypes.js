// @flow
import type { Restrict } from './types'

export type ADD_BOOKMARK_REQUEST_TYPE = 'BookmarkButton/ADD_BOOKMARK_REQUEST'
export type ADD_BOOKMARK_SUCCESS_TYPE = 'BookmarkButton/ADD_BOOKMARK_SUCCESS'
export type ADD_BOOKMARK_FAILER_TYPE = 'BookmarkButton/ADD_BOOKMARK_FAILER'

export type Action =
  | {|
      +type: ADD_BOOKMARK_REQUEST_TYPE | ADD_BOOKMARK_SUCCESS_TYPE,
      +id: number,
      +restrict: Restrict,
    |}
  | {| +type: ADD_BOOKMARK_FAILER_TYPE, +id: number, +error: string |}
