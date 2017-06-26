// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  id: ?number,
  open: boolean,
}

const initialState: State = {
  id: null,
  open: false,
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.OPEN_MANGA_PREVIEW:
      return { ...state, open: true, id: action.id }
    case Actions.CLOSE_MANGA_PREVIEW:
      return { ...state, open: false, id: null }
    default:
      return state
  }
}
