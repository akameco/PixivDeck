// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  isOpenDropdown: boolean,
  isOpenSearchField: boolean,
}

const initialState: State = {
  isOpenDropdown: false,
  isOpenSearchField: false,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.TOGGLE_SEARCH_FIELD:
      return { ...state, isOpenSearchField: !state.isOpenSearchField }
    case Actions.CLOSE_SEARCH_FIELD:
      return { ...state, isOpenSearchField: false }
    case Actions.TOGGLE_DROPDOWN:
      return { ...state, isOpenDropdown: !state.isOpenDropdown }
    case Actions.CLOSE_DROPDOWN:
      return { ...state, isOpenDropdown: false }
    default:
      return state
  }
}
