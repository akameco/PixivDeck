import { createSelector } from 'reselect'
import { State } from 'types'

const selectLanguage = (state: State) => state.Language

const makeSelectLocale = () =>
  createSelector(
    selectLanguage,
    s => s.locale
  )

export { selectLanguage, makeSelectLocale }
