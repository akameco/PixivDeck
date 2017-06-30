// @flow
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export type ADD_USER_ILLUST_COLUMN_TYPE = 'ColumnUserIllust/ADD_COLUMN'
export type ADD_USER_ILLUST_COLUMN_SUCCESS_TYPE =
  'ColumnUserIllust/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnUserIllust/SET_NEXT_URL'

export type FETCH_USER_ILLUST_TYPE = 'ColumnUserIllust/FETCH_USER_ILLUST'
export type FETCH_USER_ILLUST_SUCCESS_TYPE =
  'ColumnUserIllust/FETCH_USER_ILLUST_SUCCESS'
export type FETCH_USER_ILLUST_FAILRE_TYPE =
  'ColumnUserIllust/FETCH_USER_ILLUST_FAILRE'

export type FETCH_NEXT_USER_ILLUST_TYPE =
  'ColumnUserIllust/FETCH_NEXT_USER_ILLUST'
export type FETCH_NEXT_USER_ILLUST_SUCCESS_TYPE =
  'ColumnUserIllust/FETCH_NEXT_USER_ILLUST_SUCCESS'
export type FETCH_NEXT_USER_ILLUST_FAILRE_TYPE =
  'ColumnUserIllust/FETCH_NEXT_USER_ILLUST_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_USER_ILLUST_COLUMN_TYPE
        | ADD_USER_ILLUST_COLUMN_SUCCESS_TYPE
        | FETCH_USER_ILLUST_TYPE
        | FETCH_USER_ILLUST_FAILRE_TYPE
        | FETCH_NEXT_USER_ILLUST_TYPE
        | FETCH_NEXT_USER_ILLUST_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type:
        | FETCH_USER_ILLUST_SUCCESS_TYPE
        | FETCH_NEXT_USER_ILLUST_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<string>,
    |}
