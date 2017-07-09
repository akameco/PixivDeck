// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type Mode =
  | 'day'
  | 'week'
  | 'month'
  | 'day_male'
  | 'day_female'
  | 'week_original'
  | 'week_rookie'

export type ColumnId = Mode

export type ColumnRanking = BaseColumn

export type State = $Shape<{ [Mode]: ColumnRanking }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  return baseReducer('ColumnRanking', Actions, state, action)
}
