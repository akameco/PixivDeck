// @flow
import type { Action } from './actionTypes.js'
import { ADD_TABLE } from './constants'
import type { ColumnManagerId, ColumnManager } from './reducer'

export function addTable(id: ColumnManagerId, maneger: ColumnManager): Action {
  return {
    type: ADD_TABLE,
    id,
    maneger,
  }
}
