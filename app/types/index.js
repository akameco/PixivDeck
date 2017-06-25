// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux' // eslint-disable-line
import type { Action as UserPopoverContainerAction } from 'containers/UserPopoverContainer/type'
import type { Action as NextAction } from '../action'
import type { ColumnAction } from './column'
import type { ManageAction } from './manage'
import type { ApiAction } from './api'
import type { IllustAction } from './illust'
import type { DrawerAction } from './drawer'
import type { PopoverAction } from './popover'
import type { MiscAction } from './misc'
import type { AddColumnAction } from './addColumn'
import type { State as BaseState } from './state'

export type State = BaseState

export type Action =
  | ColumnAction
  | ManageAction
  | ApiAction
  | DrawerAction
  | IllustAction
  | MiscAction
  | PopoverAction
  | UserPopoverContainerAction
  | AddColumnAction
  | NextAction

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
