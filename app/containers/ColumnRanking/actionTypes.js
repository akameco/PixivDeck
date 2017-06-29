// @flow
import type { Response } from '../../api/schema'
import type { ColumnId } from './reducer'

export type ADD_RANKING_COLUMN_TYPE = 'ColumnRanking/ADD_COLUMN'
export type ADD_RANKING_COLUMN_SUCCESS_TYPE = 'ColumnRanking/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnRanking/SET_NEXT_URL'

export type FETCH_RANKING_TYPE = 'ColumnRanking/FETCH_RANKING'
export type FETCH_RANKING_SUCCESS_TYPE = 'ColumnRanking/FETCH_RANKING_SUCCESS'
export type FETCH_RANKING_FAILRE_TYPE = 'ColumnRanking/FETCH_RANKING_FAILRE'

export type FETCH_NEXT_RANKING_TYPE = 'ColumnRanking/FETCH_NEXT_RANKING'
export type FETCH_NEXT_RANKING_SUCCESS_TYPE =
  'ColumnRanking/FETCH_NEXT_RANKING_SUCCESS'
export type FETCH_NEXT_RANKING_FAILRE_TYPE =
  'ColumnRanking/FETCH_NEXT_RANKING_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_RANKING_COLUMN_SUCCESS_TYPE
        | FETCH_RANKING_TYPE
        | FETCH_RANKING_FAILRE_TYPE
        | FETCH_NEXT_RANKING_TYPE
        | FETCH_NEXT_RANKING_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: ADD_RANKING_COLUMN_TYPE, +mode: ColumnId |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_RANKING_SUCCESS_TYPE | FETCH_NEXT_RANKING_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<string>,
    |}
