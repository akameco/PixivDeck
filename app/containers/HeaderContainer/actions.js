// @flow
import type { Action } from './actionTypes'
import {
  TOGGLE_SEARCH_FIELD,
  CLOSE_SEARCH_FIELD,
  TOGGLE_DROPDOWN,
  CLOSE_DROPDOWN,
} from './constants'

export function toggleSearchField(): Action {
  return {
    type: TOGGLE_SEARCH_FIELD,
  }
}

export function closeSearchField(): Action {
  return {
    type: CLOSE_SEARCH_FIELD,
  }
}

export function toggleDropdown(): Action {
  return {
    type: TOGGLE_DROPDOWN,
  }
}

export function closeDropdown(): Action {
  return {
    type: CLOSE_DROPDOWN,
  }
}
