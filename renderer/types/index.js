// @flow
import type {ColumnType, ColumnAction, Query} from './column';
import type {Manage, ManageAction, ModalType, ManageFilter} from './manage';
import type {Filter, FilterAction} from './filter';
import type {IpcAction} from './ipc';
import type {Work, Works, Page} from './work';
import type {User, Users} from './user';

export type {
	Manage,
	ManageFilter,
	Filter,
	FilterAction,
	ManageAction,
	ColumnAction,
	IpcAction,
	ColumnType,
	Query,
	Work,
	Works,
	User,
	Users,
	Page,
	ModalType
};

export type Entities = {
	users: Users,
	works: Works
};

export type Action = ColumnAction | ManageAction | IpcAction | FilterAction | {type: 'INIT'};

export type Dispatch = (action: Action) => Action;

export type State = {
	columns: Array<ColumnType>,
	entities: {
		users: Users,
		works: Works
	},
	manage: Manage,
	filter: Filter
};

export type Store = {
	dispatch: Dispatch,
	getState: () => State,
};
