// @flow
import type { Action } from './actionTypes.js'
import { ADD_HISTORY, ADD_COLUMN_HISTORY } from './constants'

export function addHistory(id: number): Action {
  return {
    type: ADD_HISTORY,
    id,
  }
}

export function addColumnHistory(): Action {
  return {
    type: ADD_COLUMN_HISTORY,
  }
}
