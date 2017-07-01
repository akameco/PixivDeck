// @flow
import type { Action } from 'types'
import type { Illusts } from 'types/illust'

export type State = Illusts

export default function IllustById(state: State = {}, action: Action): State {
  // $FlowFixMe
  if (action.response && action.response.entities.illusts) {
    return {
      ...state,
      ...action.response.entities.illusts,
    }
  }
  return state
}
