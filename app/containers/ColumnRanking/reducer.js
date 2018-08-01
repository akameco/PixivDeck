// @flow
import ms from 'ms'
import update from 'utils/update'
import { baseReducer, type BaseColumn } from '../Column/reducer'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type Mode =
  | 'day'
  | 'week'
  | 'month'
  | 'day_male'
  | 'day_female'
  | 'week_original'
  | 'week_rookie'

export type ColumnId = Mode

export type ColumnRanking = { interval: number } & BaseColumn

export type State = $Shape<{ [Mode]: ColumnRanking }>

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
      return update(state, action, {
        ids: [],
        nextUrl: null,
        interval: ms('3h'),
      })
    case Actions.CLERE:
      return update(state, action, {
        ids: [],
        nextUrl: null,
        interval: ms('3h'),
      })
    default:
      return baseReducer('ColumnRanking', Actions, state, action)
  }
}
