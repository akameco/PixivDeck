import { createSelector } from 'reselect'
import { State } from 'types/state'

const selectRoot = (state: State) => state.SearchField

export const makeSelectKeyword = () =>
  createSelector(
    selectRoot,
    s => s.keywords
  )
