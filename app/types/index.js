// @flow
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'; // eslint-disable-line
import type {Columns, ColumnType, ColumnAction, Query, Params, Endpoint} from './column'
import type {Manage, ManageAction, ModalType} from './manage'
import type {History, HistoryAction} from './history'
import type {Filter, FilterAction} from './filter'
import type {ApiAction} from './api'
import type {Illust, Illusts, MetaPages} from './illust'
import type {User, Users, Profile} from './user'
import type {Auth, AuthAction} from './auth'
import type {Config, ConfigAction} from './config'

export type {
	Illust,
	Illusts,
	Manage,
	Filter,
	History,
	ApiAction,
	ColumnType,
	Query,
	Endpoint,
	User,
	Users,
	Profile,
	MetaPages,
	ModalType,
	Params,
	Auth,
	Config,
	ConfigAction,
	Columns,
}

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
	| HistoryAction
	| AuthAction
	| ConfigAction
;

export type State = {
	columns: Array<ColumnType>,
	auth: Auth,
	entities: Entities,
	manage: Manage,
	filter: Filter,
	history: History,
	config: Config,
	illustById: Illusts,
};

export type Dispatch = ReduxDispatch<State, Action>;
export type Store = ReduxStore<State, Action>;
