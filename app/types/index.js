// @flow
import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'; // eslint-disable-line
import type {ColumnType, ColumnAction, Query, Params} from './column';
import type {Manage, ManageAction, ModalType} from './manage';
import type {History, HistoryAction} from './history';
import type {Filter, FilterAction} from './filter';
import type {ApiAction} from './api';
import type {Illust, Illusts, MetaPages} from './illust';
import type {User, Users, Profile} from './user';
import type {Auth, Action as AuthAction} from './auth';

export type {
	Illust,
	Illusts,
	Manage,
	Filter,
	History,
	ApiAction,
	ColumnType,
	Query,
	User,
	Users,
	Profile,
	MetaPages,
	ModalType,
	Params,
	Auth,
};

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
;

export type State = {
	columns: Array<ColumnType>,
	auth: Auth,
	entities: Entities,
	manage: Manage,
	filter: Filter,
	history: History
};

export type Dispatch = ReduxDispatch<State, Action>;
export type Store = ReduxStore<State, Action>;
