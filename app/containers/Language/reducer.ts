import { Action } from './actionTypes'
import * as Actions from './constants'

export interface State {
  locale: string | null | undefined
}
export const DEFAULT_LOCALE = 'ja'
const initialState: State = {
  locale: null,
}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.CHANGE_LOCALE:
      return { ...state, locale: action.locale }

    default:
      return state
  }
}
