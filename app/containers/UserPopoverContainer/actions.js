// @flow
import {
  OPEN,
  CLEAR,
  POPOVER_REQUEST,
  POPOVER_SUCCESS,
  POPOVER_FAILURE,
} from './actionTypes'
import type {
  Open,
  Clear,
  PopoverRequest,
  PopoverSuccess,
  PopoverFailure,
} from './actionTypes'

export function open(id: number): Open {
  return {
    type: OPEN,
    id,
  }
}
export function clear(): Clear {
  return {
    type: CLEAR,
  }
}
export function popoverRequest(): PopoverRequest {
  return {
    type: POPOVER_REQUEST,
  }
}
export function popoverSuccess(illusts: number[]): PopoverSuccess {
  return {
    type: POPOVER_SUCCESS,
    illusts,
  }
}
export function popoverFailure(error: string): PopoverFailure {
  return {
    type: POPOVER_FAILURE,
    error,
  }
}
