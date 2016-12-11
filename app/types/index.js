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

export type Entities = {
	users: Users,
	illusts: Illusts
};

export type Response = {
	response: {
		entities: Entities,
		result: Array<number>
	}
};

export type Action =
	| ColumnAction
	| ManageAction
	| ApiAction
	| FilterAction
	| AuthAction
	| ConfigAction
	| DrawerAction
	| IllustAction
;

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
};

export type Dispatch = ReduxDispatch<State, Action>;
export type Store = ReduxStore<State, Action>;
