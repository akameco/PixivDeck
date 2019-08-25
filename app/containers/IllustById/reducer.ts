import { Action } from 'types'
import { Illusts } from 'types/illust'

export type State = Illusts

export default function IllustById(state: State = {}, action: Action): State {
  if (action.response && action.response.entities.illusts) {
    return { ...state, ...action.response.entities.illusts }
  }

  return state
}
