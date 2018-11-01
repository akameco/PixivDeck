// @flow
import type { Action } from './actionTypes'
import { OPEN, POPOVER_SUCCESS, CLEAR, POPOVER_FAILRE } from './constants'

export function open(id: number): Action {
  return {
    type: OPEN,
    id,
  }
}

export function popoverSuccess(illusts: Array<number>): Action {
  return {
    type: POPOVER_SUCCESS,
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
