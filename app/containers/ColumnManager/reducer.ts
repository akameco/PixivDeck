import update from 'utils/update'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnManagerId = string
export type ColumnId = string
export type ColumnType =
  | 'RANKING'
  | 'RANKING_R18'
  | 'BOOKMARK'
  | 'FOLLOW'
  | 'USER_ILLUST'
  | 'SEARCH'
  | 'HISTORY'
  | 'RECOMMENDED'
export interface ColumnManager {
  columnId: ColumnId
  type: ColumnType
}
export interface Column {
  title: string
}
export interface State {
  [id: string]: ColumnManager
}
export default function(state: State = {}, action: Action): State {
  switch (action.type) {
    case Actions.ADD_TABLE:
      return update(state, action, action.maneger)

    default:
      return state
  }
}
