// @flow
import type {ColumnType, ColumnAction, Query} from './column';
import type {Manage, ManageAction} from './manage';
import type {IpcAction} from './ipc';
import type {Work, Works, Page} from './work';
import type {Users} from './user';

export type {
	Manage,
	ManageAction,
	ColumnAction,
	IpcAction,
	ColumnType,
	Query,
	Work,
	Works,
	Users,
	Page
};

export type Entities = {
	users: Users,
	works: Works
};

export type Action = ColumnAction | ManageAction | IpcAction | {type: 'INIT'};

export type Dispatch = (action: Action) => any;

export type State = {
	columns: Array<ColumnType>,
	entities: {
		users: Users,
		works: Works
	},
	manage: Manage
};

export type Store = {
	dispatch: Dispatch,
	getState: () => State,
};
