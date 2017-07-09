// @flow
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnUserIllust/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnUserIllust/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnUserIllust/SET_NEXT_URL'

export type FETCH_TYPE = 'ColumnUserIllust/FETCH'
export type FETCH_SUCCESS_TYPE =
  'ColumnUserIllust/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE =
  'ColumnUserIllust/FETCH_FAILRE'

export type FETCH_NEXT_TYPE =
  'ColumnUserIllust/FETCH_NEXT'
export type FETCH_NEXT_SUCCESS_TYPE =
  'ColumnUserIllust/FETCH_NEXT_SUCCESS'
export type FETCH_NEXT_FAILRE_TYPE =
  'ColumnUserIllust/FETCH_NEXT_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | FETCH_TYPE
        | FETCH_FAILRE_TYPE
        | FETCH_NEXT_TYPE
        | FETCH_NEXT_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type:
        | FETCH_SUCCESS_TYPE
        | FETCH_NEXT_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<number>,
    |}
