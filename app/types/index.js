// @flow
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'; // eslint-disable-line
import type {ColumnType, ColumnAction} from './column'
import type {Manage, ManageAction} from './manage'
import type {Filter, FilterAction} from './filter'
import type {ApiAction} from './api'
import type {Illusts, IllustAction} from './illust'
import type {Users} from './user'
import type {Auth, AuthAction} from './auth'
import type {Config, ConfigAction} from './config'
import type {Drawer, DrawerAction} from './drawer'
import type {Popover, PopoverAction} from './popover'
import type {MiscAction} from './misc'
import type {AddColumnAction} from './addColumn'

export type Entities = {
	users: Users,
	illusts: Illusts
}

export type Response = {
	response: {
		entities: Entities,
		result: Array<number>
	}
}

export type Action =
	| ColumnAction
	| ManageAction
	| ApiAction
	| FilterAction
	| AuthAction
	| ConfigAction
	| DrawerAction
	| IllustAction
	| MiscAction
	| PopoverAction
	| AddColumnAction

export type State = {
	columns: Array<ColumnType>,
	auth: Auth,
	entities: Entities,
	manage: Manage,
	filter: Filter,
	config: Config,
	illustById: Illusts,
	userById: Users,
	drawer: Drawer,
	popover: Popover,
}

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>
