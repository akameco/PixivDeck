// @flow
import type { Action } from './actionTypes.js'
import { OPEN_USER_POPOVER } from './constants'

export function openUserPopover(id: number): Action {
  return {
    type: OPEN_USER_POPOVER,
    id,
  }
}
