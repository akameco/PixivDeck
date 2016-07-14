// @flow
import type {ColumnAction} from './column';
import type {ManageAction} from './manage';
import type {IpcAction} from './ipc';

export type RankingModeType = 'daily' | 'weekly' | 'monthly' | 'rookie' | 'original' | 'male' | 'female' | 'daily_r18' | 'weekly_r18' | 'male_r18' | 'female_r18' | 'r18g';

export type ImageUrls = {
	large: string,
	medium: string,
	small: string,
	px128x128: string,
	px480mw: string
}

export type Page = {
	imageUrls: ImageUrls
}

export type WorkType = {
	id: number,
	title: string,
	caption: string,
	tags: Array<string>,
	user: number,
	isManga: bool,
	width: number,
	height: number,
	pageCount: number,
	ageLimit: 'all-age' | 'r18',
	type: 'illustration' | 'manga',
	imageUrls: {
		large: string,
		medium: string,
		small: string,
		px128x128: string,
		px480mw: string
	},
	metadata: ?{
		pages: Array<Page>
	},
	stats: ?{
		favoritedCount: {
			private: number,
			public: number
		},
		score: number,
		viewCount: number
	}
}

export type WorksType = {[key: number]: WorkType} | Object;

export type UserType = {
	name: string,
	account: string,
	profileImageUrls: Object
}

export type UsersType = {[key: number]: UserType} | Object;

export type ColumnType = {
	id: number,
	title: string,
	works?: Array<number>,
	query: {
		type: string,
		q?: string,
		opts: {
			mode?: string,
			publicity?: 'public' | 'private',
			page: number
		}
	}
};

export type Manage = {
	isLogin: bool,
	isModal: bool,
	isImageView: bool,
	isImgLoaded: bool,
	isMangaView: bool,
	isDropdown: bool,
	currentWorkId: ?number,
	filter: {
		tags: Array<string>
	}
};

export type Entities = {
	users: UsersType,
	works: WorksType
};

export type Action = ColumnAction | ManageAction | IpcAction | {type: 'INIT'};

export type Dispatch = (action: Action) => any;

export type State = {
	columns: Array<ColumnType>,
	entities: {
		users: UsersType,
		works: WorksType
	},
	manage: Manage
};

export type Store = {
	dispatch: Dispatch,
	getState: () => State,
};
