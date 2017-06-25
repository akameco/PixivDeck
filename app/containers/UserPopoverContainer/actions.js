// @flow
import type { Action } from './actionTypes.js'
import { OPEN_USER_POPOVER, ADD_POPOVER, CLEAR_POPOVER } from './constants'
import type { Illust } from 'types/illust'

export function openUserPopover(id: number): Action {
  return {
    type: OPEN_USER_POPOVER,
    id,
  }
}

export function addPopover(illusts: Array<Illust>): Action {
  return {
    type: ADD_POPOVER,
    illusts,
  }
}

export function clearPopover(): Action {
  return {
    type: CLEAR_POPOVER,
  }
}
