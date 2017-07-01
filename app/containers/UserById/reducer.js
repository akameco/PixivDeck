// @flow
import type { Action } from 'types'
import type { Users } from 'types/user'

export type State = Users

export default function UserById(state: State = {}, action: Action): State {
  // $FlowFixMe
  if (action.response && action.response.entities.users) {
    return {
      ...state,
      ...action.response.entities.users,
    }
  }
  return state
}
