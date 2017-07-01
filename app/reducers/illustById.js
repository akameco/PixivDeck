// @flow
import type { Action } from 'types'
import type { Illusts } from 'types/illust'

export default function illustById(state: Illusts = {}, action: Action) {
  // $FlowFixMe
  if (action.response && action.response.entities.illusts) {
    return {
      ...state,
      ...action.response.entities.illusts,
    }
  }
  return state
}
