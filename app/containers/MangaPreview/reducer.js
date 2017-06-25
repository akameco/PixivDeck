// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = { open: boolean }

const initialState: State = {
  open: false,
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.OPEN_MANGA_PREVIEW:
      return { ...state, open: true }
    case Actions.CLOSE_MANGA_PREVIEW:
      return { ...state, open: false }
    default:
      return state
  }
}
