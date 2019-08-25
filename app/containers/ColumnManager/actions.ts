import { Action } from './actionTypes'
import { ADD_TABLE } from './constants'
import { ColumnManagerId, ColumnManager } from './reducer'

export function addTable(id: ColumnManagerId, maneger: ColumnManager): Action {
  return {
    type: ADD_TABLE,
    id,
    maneger,
  }
}
