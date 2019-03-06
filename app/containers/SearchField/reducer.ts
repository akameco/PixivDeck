import { Action } from './actionTypes'
import * as Actions from './constants'

type Word = string
export interface State {
  keywords: Word[]
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
      return {
        keywords: action.keywords,
      }

    default:
      return state
  }
}
