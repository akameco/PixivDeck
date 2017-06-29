// @flow
import type { Action } from './actionTypes.js'
import { ADD } from './constants'

export function add(id: string): Action {
  return {
    type: ADD,
    id,
  }
}
