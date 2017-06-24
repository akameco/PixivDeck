// @flow
import { CHANGE_LOCALE } from './constants'
import type { State, Action } from './type'

export const DEFAULT_LOCALE = 'ja'

const initialState: State = {
  locale: DEFAULT_LOCALE,
}

function LanguageProvider(state: State = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.locale }
    default:
      return state
  }
}

export default LanguageProvider
