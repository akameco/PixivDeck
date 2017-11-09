// @flow
import { OPEN_PIXIV } from './actionTypes'
import type { OpenPixiv } from './actionTypes'

export function openPixiv(id: number): OpenPixiv {
  return {
    type: OPEN_PIXIV,
    id,
  }
}
