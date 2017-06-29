// @flow
import { union } from 'lodash'
import type { ColumnManagerId } from '../ColumnManager/reducer'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type State = {
  ids: Array<ColumnManagerId>,
}

const initialState: State = {
  ids: [],
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case Actions.ADD:
      return { ids: union(state.ids, [action.id]) }
    case Actions.REMOVE:
      return { ids: state.ids.filter(v => action.id !== v) }
    default:
      return state
  }
}
