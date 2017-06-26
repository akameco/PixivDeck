// @flow
import type { Action } from './actionTypes.js'
import { OPEN_PIXIV } from './constants'

export function openPixiv(id: number): Action {
  return {
    type: OPEN_PIXIV,
    id,
  }
}
