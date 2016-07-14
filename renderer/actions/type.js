// @flow
export type RankingModeType =
'daily' | 'weekly' | 'monthly' | 'rookie' | 'original' | 'male' | 'female' | 'daily_r18' | 'weekly_r18' | 'male_r18' | 'female_r18' | 'r18g';

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
	isImgLoaded: bool,
	isMangaView: bool,
	isDropdown: bool,
	currentWorkId: ?number,
	filter: {
		tags: Array<string>
	}
};
