// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnManagerId = string
export type ColumnId = string
export type ColumnType = 'RANKING' | 'RANKING_R18' | 'BOOKMARK' | 'FOLLOW'

export type ColumnManager = {
  columnId: ColumnId,
  type: ColumnType,
}

export type Column = {
  title: string,
}

export type State = {
  [id: ColumnManagerId]: ColumnManager,
}

const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.ADD_COLUMN:
      return { ...state, [action.id]: action.maneger }
    default:
      return state
  }
}
