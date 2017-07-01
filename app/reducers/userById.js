// @flow
import type { Action } from 'types'
import type { Users } from 'types/user'

export default function userById(state: Users = {}, action: Action) {
  // $FlowFixMe
  if (action.response && action.response.entities.users) {
    return {
      ...state,
      ...action.response.entities.users,
    }
  }
  return state
}
