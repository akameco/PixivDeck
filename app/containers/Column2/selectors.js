// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: string,
}

const getColumn = (state: State, { id }: Props) => state.Column2[id]

export const makeSelectColumn = () => createSelector(getColumn, s => s)
