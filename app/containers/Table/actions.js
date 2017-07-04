// @flow
import type { Action } from './actionTypes.js'
import { ADD_TABLE, REMOVE_TABLE, SET_TABLE } from './constants'

export function addTable(id: string): Action {
  return {
    type: ADD_TABLE,
    id,
  }
}

export function removeTable(id: string): Action {
  return {
    type: REMOVE_TABLE,
    id,
  }
}

export function setTable(ids: Array<string>): Action {
  return {
    type: SET_TABLE,
    ids,
  }
}
