import { createSelector } from 'reselect'
import { State } from 'types/state'

interface Props {
  id: number
}
export const getUserById = (state: State) => state.UserById
export const getSelectUser = (state: State, { id }: Props) => state.UserById[id]
export const makeSelectUserById = () =>
  createSelector(
    getSelectUser,
    s => s
  )
