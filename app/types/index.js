// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as NextAction } from '../action'
import type { State as BaseState } from './state'

export type State = BaseState

export type Action = NextAction

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
