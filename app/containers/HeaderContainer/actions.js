// @flow
import type { Action } from './actionTypes.js'
import { TOGGLE_SEARCH_FIELD } from './constants'

export function toggleSearchField(): Action {
  return {
    type: TOGGLE_SEARCH_FIELD,
  }
}
