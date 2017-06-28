// @flow
import type { Action } from './actionTypes.js'
import { ADD_COLUMN } from './constants'
import type { Body } from './reducer'

export function addColumn(id: string, body: Body): Action {
  return {
    type: ADD_COLUMN,
    id,
    body,
  }
}
