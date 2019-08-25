import { union } from 'lodash'
import { ColumnManagerId } from '../ColumnManager/reducer'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type TableIds = ColumnManagerId[]
export interface State {
  ids: TableIds
  nextIds: TableIds
}
const initialState: State = {
  ids: [],
  nextIds: [],
}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_TABLE:
      return {
        ids: union([...state.ids, action.id]),
        nextIds: union([...state.nextIds, action.id]),
      }

    case Actions.REMOVE_TABLE: {
      const id = action.id
      return {
        ids: state.ids.filter(v => id !== v),
        nextIds: state.ids.filter(v => id !== v),
      }
    }

    case Actions.SET_TABLE:
      return { ...state, nextIds: action.ids }

    default:
      return state
  }
}
