// @flow
import type { Action } from './actionTypes.js'
import { OPEN, POPOVER_SUCCESS, CLEAR, POPOVER_FAILRE } from './constants'
import type { Response } from '../../api/schema'

export function open(id: number): Action {
  return {
    type: OPEN,
    id,
  }
}

export function popoverSuccess(
  response: Response,
  illusts: Array<number>
): Action {
  return {
    type: POPOVER_SUCCESS,
    response,
    illusts,
  }
}

export function clear(): Action {
  return {
    type: CLEAR,
  }
}

export function popoverFailre(error: string): Action {
  return {
    type: POPOVER_FAILRE,
    error,
  }
}
