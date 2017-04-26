// @flow
import { CHNAGE_LOCALE, DEFAULT_LOCALE } from './constants'
import type { State, Action } from './type'

const initialState: State = {
  locale: DEFAULT_LOCALE,
}

function LanguageProvider(state: State = initialState, action: Action) {
  switch (action.type) {
    case CHNAGE_LOCALE:
      return { ...state, locale: action.locale }
    default:
      return state
  }
}

export default LanguageProvider
