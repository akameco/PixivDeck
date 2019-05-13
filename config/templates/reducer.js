// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {}

const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    default:
      return state
  }
}
