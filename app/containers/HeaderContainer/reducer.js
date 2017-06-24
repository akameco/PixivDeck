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
    default:
      return state
  }
}
