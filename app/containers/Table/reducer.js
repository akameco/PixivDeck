// @flow
import { union } from 'lodash'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  names: Array<string>,
}

const initialState: State = {
  names: [],
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.ADD:
      return { names: union(state.names, [action.name]) }
    default:
      return state
  }
}
