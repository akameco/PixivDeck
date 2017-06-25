// @flow
import type { Action } from './actionTypes.js'
import { CLOSE_DRAWER, OPEN_DRAWER } from './constants'

export function closeDrawer(): Action {
  return {
    type: CLOSE_DRAWER,
  }
}

export function openDrawer(id: number): Action {
  return {
    type: OPEN_DRAWER,
    id,
  }
}
