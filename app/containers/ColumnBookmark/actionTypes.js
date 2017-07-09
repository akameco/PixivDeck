// @flow
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnBookmark/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnBookmark/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnBookmark/SET_NEXT_URL'

export type FETCH_BOOKMARK_TYPE = 'ColumnBookmark/FETCH_BOOKMARK'
export type FETCH_BOOKMARK_SUCCESS_TYPE =
  'ColumnBookmark/FETCH_BOOKMARK_SUCCESS'
export type FETCH_BOOKMARK_FAILRE_TYPE = 'ColumnBookmark/FETCH_BOOKMARK_FAILRE'

export type FETCH_NEXT_BOOKMARK_TYPE = 'ColumnBookmark/FETCH_NEXT_BOOKMARK'
export type FETCH_NEXT_BOOKMARK_SUCCESS_TYPE =
  'ColumnBookmark/FETCH_NEXT_BOOKMARK_SUCCESS'
export type FETCH_NEXT_BOOKMARK_FAILRE_TYPE =
  'ColumnBookmark/FETCH_NEXT_BOOKMARK_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | FETCH_BOOKMARK_TYPE
        | FETCH_BOOKMARK_FAILRE_TYPE
        | FETCH_NEXT_BOOKMARK_TYPE
        | FETCH_NEXT_BOOKMARK_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_BOOKMARK_SUCCESS_TYPE | FETCH_NEXT_BOOKMARK_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<number>,
    |}
