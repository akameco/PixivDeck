// @flow
export type RankingModeType =
'daily' | 'weekly' | 'monthly' | 'rookie' | 'original' | 'male' | 'female' | 'daily_r18' | 'weekly_r18' | 'male_r18' | 'female_r18' | 'r18g';

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
		q?: string,
		opts: {
			mode?: string,
			publicity?: 'public' | 'private',
			page: number
		}
	}
}
export type Manage = {
	isModal: bool,
	isImageView: bool,
	currentWorkId: ?number
};
