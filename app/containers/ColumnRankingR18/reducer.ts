import ms from 'ms'
import update from 'utils/update'
import { baseReducer, BaseColumn } from '../Column/reducer'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type R18Mode =
  | 'day_r18'
  | 'week_r18'
  | 'day_male_r18'
  | 'day_female_r18'
  | 'week_r18g'
export type ColumnId = R18Mode
export type ColumnRankingR18 = {
  interval: number
} & BaseColumn
export interface State {
  [a: string]: Partial<ColumnRankingR18>
}
export const initialState: State = {}
export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_COLUMN_SUCCESS:
    case Actions.CLERE:
      return update(state, action, {
        ids: [],
        nextUrl: null,
        interval: ms('3h'),
      })

    default:
      return baseReducer('ColumnRankingR18', Actions, state, action)
  }
}
