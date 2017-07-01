// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: number,
}

export const getIllustById = (state: State) => state.IllustById

export const getSelectIllust = (state: State, { id }: Props) =>
  state.IllustById[id]

export const makeSelectIllust = () => createSelector(getSelectIllust, s => s)
