// @flow
import type { Response } from 'services/api'
import type { ColumnId } from './reducer'

export type ADD_RANKING_R18_COLUMN_TYPE = 'ColumnRankingR18/ADD_COLUMN'
export type ADD_RANKING_R18_COLUMN_SUCCESS_TYPE =
  'ColumnRankingR18/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnRankingR18/SET_NEXT_URL'

export type FETCH_RANKING_R18_TYPE = 'ColumnRankingR18/FETCH_RANKING_R18'
export type FETCH_RANKING_R18_SUCCESS_TYPE =
  'ColumnRankingR18/FETCH_RANKING_R18_SUCCESS'
export type FETCH_RANKING_R18_FAILRE_TYPE =
  'ColumnRankingR18/FETCH_RANKING_R18_FAILRE'

export type FETCH_NEXT_RANKING_R18_TYPE = 'ColumnRanking/FETCH_NEXT_RANKING_R18'
export type FETCH_NEXT_RANKING_R18_SUCCESS_TYPE =
  'ColumnRanking/FETCH_NEXT_RANKING_R18_SUCCESS'
export type FETCH_NEXT_RANKING_R18_FAILRE_TYPE =
  'ColumnRanking/FETCH_NEXT_RANKING_R18_FAILRE'

export type Action =
  | {|
      +type:
        | ADD_RANKING_R18_COLUMN_SUCCESS_TYPE
        | FETCH_NEXT_RANKING_R18_TYPE
        | FETCH_NEXT_RANKING_R18_FAILRE_TYPE
        | FETCH_RANKING_R18_TYPE
        | FETCH_RANKING_R18_FAILRE_TYPE,
      +id: ColumnId,
    |}
  | {| +type: ADD_RANKING_R18_COLUMN_TYPE, +mode: ColumnId |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type:
        | FETCH_RANKING_R18_SUCCESS_TYPE
        | FETCH_NEXT_RANKING_R18_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<number>,
    |}
