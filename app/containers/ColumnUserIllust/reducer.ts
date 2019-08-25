import { baseReducer, BaseColumn } from '../Column/reducer'
import { Action } from './actionTypes'
import * as Actions from './constants'

export type ColumnId = number
export type ColumnUserIllust = BaseColumn
export type State = Partial<{
  [a: string]: ColumnUserIllust
}>
const initialState: State = {}
export default function(state: State = initialState, action: Action): State {
  return baseReducer('ColumnUserIllust', Actions, state, action)
}
