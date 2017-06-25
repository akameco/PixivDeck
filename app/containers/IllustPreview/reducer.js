// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  open: boolean,
}

const initialState: State = {
  open: false,
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.OPEN_ILLUST_VIEWER:
      return { ...state, open: true }
    case Actions.COLOSE_ILLUST_VIEWER:
      return { ...state, open: false }
    default:
      return state
  }
}
