// @flow
import type { Action } from './actionTypes.js'
import { ADD } from './constants'

export function add(name: string): Action {
  return {
    type: ADD,
    name,
  }
}
