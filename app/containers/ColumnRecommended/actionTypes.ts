import { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnRecommended/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnRecommended/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnRecommended/SET_NEXT_URL'
export type CLERE_TYPE = 'ColumnRecommended/CLERE'
export type FETCH_TYPE = 'ColumnRecommended/FETCH'
export type FETCH_SUCCESS_TYPE = 'ColumnRecommended/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'ColumnRecommended/FETCH_FAILRE'
export type Action =
  | {
      type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | CLERE_TYPE
        | FETCH_TYPE
        | FETCH_FAILRE_TYPE
      id: ColumnId
    }
  | {
      type: SET_NEXT_URL_TYPE
      id: ColumnId
      nextUrl: string
    }
  | {
      type: FETCH_SUCCESS_TYPE
      id: ColumnId
      ids: number[]
    }
