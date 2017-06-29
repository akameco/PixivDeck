// @flow
import type { Action } from './actionTypes.js'
import { ADD, REMOVE } from './constants'

export function add(id: string): Action {
  return {
    type: ADD,
    id,
  }
}

export function remove(id: string): Action {
  return {
    type: REMOVE,
    id,
  }
}
