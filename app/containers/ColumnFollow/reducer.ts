import ms from 'ms'
import update from 'utils/update'
import { baseReducer, BaseColumn } from '../Column/reducer'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type Restrict = 'public' | 'private'
export type ColumnId = Restrict
export type ColumnFollow = {
  interval: number
} & BaseColumn
export type State = Partial<{
  [a: ColumnId]: ColumnFollow
}>
const initialState: State = {}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
      return update(state, action, {
        ids: [],
        nextUrl: null,
        interval: ms('3m'),
      })

    default:
      return baseReducer('ColumnFollow', Actions, state, action)
  }
}
