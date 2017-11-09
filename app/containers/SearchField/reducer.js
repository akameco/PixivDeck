// @flow
import { Actions, type Action } from './actionTypes'

type Word = string

export type State = {
  keywords: Array<Word>,
}

const initialState: State = {
  keywords: [],
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.FETCH_SUCCESS:
      return { keywords: action.keywords }
    default:
      return state
  }
}
