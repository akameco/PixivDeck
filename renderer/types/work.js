// @flow
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

export type Work = {
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
	imageUrls: ImageUrls,
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

export type Works = {[key: number]: Work} | Object;
