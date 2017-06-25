// @flow
import type { Action } from './actionTypes.js'
import { FOLLLOW_REQUEST, UN_FOLLLOW_REQUEST } from './constants'

export function folllowRequest(id: number): Action {
  return {
    type: FOLLLOW_REQUEST,
    id,
  }
}

export function unFolllowRequest(id: number): Action {
  return {
    type: UN_FOLLLOW_REQUEST,
    id,
  }
}
