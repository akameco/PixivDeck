// @flow
import { baseReducer, type BaseColumn } from '../Column/reducer'
import type { Action } from './actionTypes'
import * as Actions from './constants'

export type R18Mode =
  | 'day_r18'
  | 'week_r18'
  | 'day_male_r18'
  | 'day_female_r18'
  | 'week_r18g'

export type ColumnId = R18Mode

export type ColumnRanking = BaseColumn

export type State = { [R18Mode]: $Shape<ColumnRanking> }

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  return baseReducer('ColumnRankingR18', Actions, state, action)
}
