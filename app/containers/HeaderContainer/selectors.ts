import { createSelector } from 'reselect'
import { State } from 'types/state'

const selectHeader = (state: State) => state.HeaderContainer

const makeSelectisOpenDropdown = () =>
  createSelector(
    selectHeader,
    s => s.isOpenDropdown
  )

const makeSelectisOpenSearchField = () =>
  createSelector(
    selectHeader,
    s => s.isOpenSearchField
  )

export { selectHeader, makeSelectisOpenDropdown, makeSelectisOpenSearchField }
