// @flow
import type { Action } from './type'
import { CHNAGE_LOCALE } from './constants'

export function changeLocale(locale: string): Action {
  return {
    type: CHNAGE_LOCALE,
    locale,
  }
}
