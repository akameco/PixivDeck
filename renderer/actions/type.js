// @flow
export type RankingModeType = 'daily' | 'weekly' | 'monthly';

export type WorkType = {
	id: number,
	title: string,
	caption: string,
	tags: Array<string>,
	user: number,
	imageUrls: Object
}

export type WorksType = {[key: number]: WorkType}

export type UserType = {
	name: string,
	account: string,
	profileImageUrls: Object
}

export type UsersType = {[key: number]: UserType}

export type ColumnType = {
	id: number,
	title: string,
	works?: Array<number>,
	query: {
		type: string,
		opts: {
			mode?: string,
			page: number
		}
	}
}
export type Manage = {
	isModal: bool,
	isImageView: bool,
	currentWorkId: ?number
};
