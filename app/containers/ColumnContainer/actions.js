// @flow
import type { Action } from './actionTypes.js'
import { CLOSE } from './constants'

export function close(id: number): Action {
  return {
    type: CLOSE,
    id,
  }
}
