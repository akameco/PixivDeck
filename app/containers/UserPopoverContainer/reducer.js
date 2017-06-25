// @flow
import type { Illust } from 'types/illust'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  illusts: Array<Illust>,
}

const initialState: State = {
  illusts: [],
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_POPOVER:
      return { illusts: action.illusts }
    case Actions.CLEAR_POPOVER:
      return { illusts: [] }
    default:
      return state
  }
}
