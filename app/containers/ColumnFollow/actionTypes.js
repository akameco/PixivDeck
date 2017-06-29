// @flow
import type { Response } from '../../api/schema'
import type { ColumnId } from './reducer'

export type ADD_FOLLOW_COLUMN_TYPE = 'ColumnFollow/ADD_COLUMN'
export type ADD_FOLLOW_COLUMN_SUCCESS_TYPE = 'ColumnFollow/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnFollow/SET_NEXT_URL'

export type FETCH_FOLLOW_TYPE = 'ColumnFollow/FETCH_FOLLOW'
export type FETCH_FOLLOW_SUCCESS_TYPE = 'ColumnFollow/FETCH_FOLLOW_SUCCESS'
export type FETCH_FOLLOW_FAILRE_TYPE = 'ColumnFollow/FETCH_FOLLOW_FAILRE'

export type FETCH_NEXT_FOLLOW_TYPE = 'ColumnFollow/FETCH_NEXT_FOLLOW'
export type FETCH_NEXT_FOLLOW_SUCCESS_TYPE =
  'ColumnFollow/FETCH_NEXT_FOLLOW_SUCCESS'
export type FETCH_NEXT_FOLLOW_FAILRE_TYPE =
  'ColumnFollow/FETCH_NEXT_FOLLOW_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_FOLLOW_COLUMN_TYPE
        | ADD_FOLLOW_COLUMN_SUCCESS_TYPE
        | FETCH_FOLLOW_TYPE
        | FETCH_FOLLOW_FAILRE_TYPE
        | FETCH_NEXT_FOLLOW_TYPE
        | FETCH_NEXT_FOLLOW_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_FOLLOW_SUCCESS_TYPE | FETCH_NEXT_FOLLOW_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<string>,
    |}
