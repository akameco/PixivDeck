// @flow
import type { ColumnId } from '../ColumnManager/reducer'
import type { Response } from '../../api/schema'
import type { Mode } from './reducer'

export type ADD_RANKING_COLUMN_TYPE = 'ColumnRanking/ADD_COLUMN'
export type ADD_RANKING_COLUMN_SUCCESS_TYPE = 'ColumnRanking/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnRanking/SET_NEXT_URL'

export type FETCH_RANKING_TYPE = 'ColumnRanking/FETCH_RANKING'
export type FETCH_RANKING_SUCCESS_TYPE = 'ColumnRanking/FETCH_RANKING_SUCCESS'
export type FETCH_RANKING_FAILRE_TYPE = 'ColumnRanking/FETCH_RANKING_FAILRE'

// TODO GenericTypeの場合のs2s
export type AddColumnAction = {|
  +type: ADD_RANKING_COLUMN_SUCCESS_TYPE,
  +id: ColumnId,
  +mode: Mode,
  +title: string,
|}

export type Action =
  | {| +type: ADD_RANKING_COLUMN_TYPE, +mode: Mode |}
  | {|
      +type: ADD_RANKING_COLUMN_SUCCESS_TYPE,
      +id: ColumnId,
      +mode: Mode,
      +title: string,
    |}
  | {| +type: FETCH_RANKING_TYPE | FETCH_RANKING_FAILRE_TYPE, +id: ColumnId |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_RANKING_SUCCESS_TYPE,
      +id: ColumnId,
      +response: Response,
      +ids: Array<string>,
    |}
