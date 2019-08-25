import { ColumnId } from './reducer'

export type ADD_COLUMN_TYPE = 'ColumnSearch/ADD_COLUMN'
export type ADD_COLUMN_SUCCESS_TYPE = 'ColumnSearch/ADD_COLUMN_SUCCESS'
export type SET_NEXT_URL_TYPE = 'ColumnSearch/SET_NEXT_URL'
export type FETCH_TYPE = 'ColumnSearch/FETCH'
export type FETCH_SUCCESS_TYPE = 'ColumnSearch/FETCH_SUCCESS'
export type FETCH_FAILRE_TYPE = 'ColumnSearch/FETCH_FAILRE'
export type FETCH_NEXT_TYPE = 'ColumnSearch/FETCH_NEXT'
export type FETCH_NEXT_SUCCESS_TYPE = 'ColumnSearch/FETCH_NEXT_SUCCESS'
export type FETCH_NEXT_FAILRE_TYPE = 'ColumnSearch/FETCH_NEXT_FAILRE'
export type FETCH_NEW_TYPE = 'ColumnSearch/FETCH_USER_NEW_ILLUST'
export type FETCH_NEW_SUCCESS_TYPE = 'ColumnSearch/FETCH_NEW_SUCCESS'
export type FETCH_NEW_FAILRE_TYPE = 'ColumnSearch/FETCH_NEW_FAILRE'
export type SET_MIN_BOOKBOOK_TYPE = 'ColumnSearch/SET_MIN_BOOKBOOK'
export type SET_INTERVAL_TYPE = 'ColumnSearch/SET_INTERVAL'
export type USERS_IN_TYPE = 'ColumnSearch/USERS_IN'
export type SET_USERS_IN_TYPE = 'ColumnSearch/SET_USERS_IN'
export type RESET_IDS_TYPE = 'ColumnSearch/RESET_IDS'
export type START_WATCH_TYPE = 'ColumnSearch/START_WATCH'
export type WATCH_NEW_TYPE = 'ColumnSearch/WATCH_NEW'
export type Action =
  | {
      type:
        | ADD_COLUMN_TYPE
        | ADD_COLUMN_SUCCESS_TYPE
        | FETCH_TYPE
        | START_WATCH_TYPE
        | WATCH_NEW_TYPE
        | FETCH_NEW_TYPE
        | RESET_IDS_TYPE
        | FETCH_NEXT_TYPE
      id: ColumnId
    }
  | {
      type: SET_NEXT_URL_TYPE
      id: ColumnId
      nextUrl: string | null | undefined
    }
  | {
      type:
        | FETCH_SUCCESS_TYPE
        | FETCH_NEXT_SUCCESS_TYPE
        | FETCH_NEW_SUCCESS_TYPE
      id: ColumnId
      ids: number[]
    }
  | {
      type: SET_MIN_BOOKBOOK_TYPE
      id: ColumnId
      minBookmarks: number
    }
  | {
      type: SET_USERS_IN_TYPE | USERS_IN_TYPE
      id: ColumnId
      usersIn: number
    }
  | {
      type: SET_INTERVAL_TYPE
      id: ColumnId
      interval: number
    }
  | {
      type: FETCH_FAILRE_TYPE | FETCH_NEXT_FAILRE_TYPE | FETCH_NEW_FAILRE_TYPE
      id: ColumnId
      error: string
    }
