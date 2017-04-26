// @flow
import { createSelector } from 'reselect'
import type { State } from 'types'

const selectLanguage = (state: State) => state.language

const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.locale)

export { selectLanguage, makeSelectLocale }
