// @flow
import type { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnRanking/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnRanking/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnRanking/SET_NEXT_URL'

export type CLERE_TYPE = 'ColumnRanking/CLERE'

export type FETCH_TYPE = 'ColumnRanking/FETCH'
export type FETCH_SUCCESS_TYPE = 'ColumnRanking/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'ColumnRanking/FETCH_FAILRE'

export type START_WATCH_TYPE = 'ColumnRanking/START_WATCH'
export type WATCH_NEW_TYPE = 'ColumnRanking/WATCH_NEW'

export type Action =
  | {|
      +type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | CLERE_TYPE
        | FETCH_TYPE
        | FETCH_FAILRE_TYPE
        | WATCH_NEW_TYPE
        | START_WATCH_TYPE,
      +id: ColumnId,
    |}
  | {| +type: SET_NEXT_URL_TYPE, +id: ColumnId, +nextUrl: string |}
  | {|
      +type: FETCH_SUCCESS_TYPE,
      +id: ColumnId,
      +ids: Array<number>,
    |}
