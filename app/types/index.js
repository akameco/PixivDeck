// @flow
import type {ColumnType, ColumnAction, Query, Params} from './column';
import type {Manage, ManageAction, ModalType} from './manage';
import type {History, HistoryAction} from './history';
import type {Filter, FilterAction} from './filter';
import type {IpcAction} from './ipc';
import type {Illust, Illusts, Page} from './illust';
import type {User, Users} from './user';

export type {
	Illust,
	Illusts,
	Manage,
	Filter,
	History,
	IpcAction,
	ColumnType,
	Query,
	User,
	Users,
	Page,
	ModalType,
	Params
};

export type Entities = {
	users: Users,
	illusts: Illusts
};

export type Action = ColumnAction | ManageAction | IpcAction | FilterAction | HistoryAction | {type: 'INIT'} ;

export type Dispatch = (action: Action) => Action;

export type State = {
	columns: Array<ColumnType>,
	entities: Entities,
	manage: Manage,
	filter: Filter,
	history: History
};

export type Store = {
	dispatch: Dispatch,
	getState: () => State,
};
