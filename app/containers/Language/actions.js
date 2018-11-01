// @flow
import type { Action } from './actionTypes'
import { CHANGE_LOCALE } from './constants'

export function changeLocale(locale: string): Action {
  return {
    type: CHANGE_LOCALE,
    locale,
  }
}
