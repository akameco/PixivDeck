// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  open: boolean,
  userId: ?number,
}

const initialState: State = {
  open: false,
  userId: null,
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.OPEN_DRAWER:
      return { ...state, open: true, userId: action.id }
    case Actions.CLOSE_DRAWER:
      return { ...state, open: false }
    default:
      return state
  }
}
