// @flow
import type { Action } from './actionTypes.js'
import { CHANGE_LOCALE } from './constants'

export function changeLocale(locale: string): Action {
  return {
    type: CHANGE_LOCALE,
    locale,
  }
}
