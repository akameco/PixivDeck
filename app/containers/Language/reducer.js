// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = { locale: string }

export const DEFAULT_LOCALE = 'ja'
const initialState: State = { locale: DEFAULT_LOCALE }

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.CHANGE_LOCALE:
      return { ...state, locale: action.locale }
    default:
      return state
  }
}
