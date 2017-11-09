// @flow
import { ADD_TABLE, REMOVE_TABLE, SET_TABLE } from './actionTypes'
import type { AddTable, RemoveTable, SetTable } from './actionTypes'

export function addTable(id: string): AddTable {
  return {
    type: ADD_TABLE,
    id,
  }
}
export function removeTable(id: string): RemoveTable {
  return {
    type: REMOVE_TABLE,
    id,
  }
}
export function setTable(ids: Array<string>): SetTable {
  return {
    type: SET_TABLE,
    ids,
  }
}
