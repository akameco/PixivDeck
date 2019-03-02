// @flow
import { createSelector } from 'reselect'
import type { State } from 'types/state'

type Props = {
  id: number,
}

export const getUserById = (state: State) => state.UserById

export const getSelectUser = (state: State, { id }: Props) => state.UserById[id]

export const makeSelectUserById = () =>
  createSelector(
    getSelectUser,
    s => s
  )
