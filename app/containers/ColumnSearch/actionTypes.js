// @flow
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnSearch/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnSearch/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnSearch/SET_NEXT_URL'

export type FETCH_TYPE = 'ColumnSearch/FETCH_USER_ILLUST'
export type FETCH_SUCCESS_TYPE = 'ColumnSearch/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'ColumnSearch/FETCH_FAILRE'

export type FETCH_NEXT_TYPE = 'ColumnSearch/FETCH_NEXT_USER_ILLUST'
export type FETCH_NEXT_SUCCESS_TYPE = 'ColumnSearch/FETCH_NEXT_SUCCESS'
export type FETCH_NEXT_FAILRE_TYPE = 'ColumnSearch/FETCH_NEXT_FAILRE'

export type SET_MIN_BOOKBOOK_TYPE = 'ColumnSearch/SET_MIN_BOOKBOOK'

export type Action =
  | {|
      +type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | FETCH_TYPE
        | FETCH_NEXT_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_SUCCESS_TYPE | FETCH_NEXT_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<number>,
    |}
  | {|
      +type: SET_MIN_BOOKBOOK_TYPE,
      +id: ColumnId,
      +minBookmarks: number,
    |}
  | {|
      +type: FETCH_FAILRE_TYPE | FETCH_NEXT_FAILRE_TYPE,
      +id: ColumnId,
      +error: string,
    |}
