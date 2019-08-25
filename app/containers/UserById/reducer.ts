import { Action } from 'types'
import { Users } from 'types/user'

export type State = Users

export default function UserById(state: State = {}, action: Action): State {
  if (action.response && action.response.entities.users) {
    return { ...state, ...action.response.entities.users }
  }

  return state
}
