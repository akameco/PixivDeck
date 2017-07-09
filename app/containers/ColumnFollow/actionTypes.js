// @flow
import type { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnFollow/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnFollow/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnFollow/SET_NEXT_URL'

export type FETCH_TYPE = 'ColumnFollow/FETCH'
export type FETCH_SUCCESS_TYPE = 'ColumnFollow/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'ColumnFollow/FETCH_FAILRE'

export type FETCH_NEXT_TYPE = 'ColumnFollow/FETCH_NEXT'
export type FETCH_NEXT_SUCCESS_TYPE = 'ColumnFollow/FETCH_NEXT_SUCCESS'
export type FETCH_NEXT_FAILRE_TYPE = 'ColumnFollow/FETCH_NEXT_FAILRE'

export type FETCH_NEW_TYPE = 'ColumnFollow/FETCH_USER_NEW_ILLUST'
export type FETCH_NEW_SUCCESS_TYPE = 'ColumnFollow/FETCH_NEW_SUCCESS'
export type FETCH_NEW_FAILRE_TYPE = 'ColumnFollow/FETCH_NEW_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | FETCH_TYPE
        | FETCH_FAILRE_TYPE
        | FETCH_NEW_TYPE
        | FETCH_NEXT_TYPE
        | FETCH_NEXT_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type:
        | FETCH_SUCCESS_TYPE
        | FETCH_NEXT_SUCCESS_TYPE
        | FETCH_NEW_SUCCESS_TYPE,
      +id: ColumnId,
      +ids: Array<number>,
    |}
  | {|
      +type: FETCH_FAILRE_TYPE | FETCH_NEXT_FAILRE_TYPE | FETCH_NEW_FAILRE_TYPE,
      +id: ColumnId,
      +error: string,
    |}
