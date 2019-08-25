import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import { Action as NextAction } from '../action'
import { State as BaseState } from './state'

export type State = BaseState
export type Action = NextAction
export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>
