// @flow
import type { Action } from './actionTypes'
import * as Actions from './constants'
import { baseReducer, type BaseColumn } from '../Column/reducer'

export type ColumnId = number

export type ColumnUserIllust = BaseColumn

export type State = $Shape<{ [ColumnId]: ColumnUserIllust }>

const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  return baseReducer('ColumnUserIllust', Actions, state, action)
}
