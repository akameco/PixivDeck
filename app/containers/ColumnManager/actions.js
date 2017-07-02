// @flow
import type { Action } from './actionTypes.js'
import { ADD_COLUMN } from './constants'
import type { ColumnManagerId, ColumnManager } from './reducer'

export function addColumn(id: ColumnManagerId, maneger: ColumnManager): Action {
  return {
    type: ADD_COLUMN,
    id,
    maneger,
  }
}
