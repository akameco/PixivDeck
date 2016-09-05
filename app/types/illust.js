// @flow
export type ImageUrls = {
	squareMedium: string,
	medium: string,
	large: string
}

export type Page = {
	imageUrls: ImageUrls
}

export type Illust = {
	id: number,
	title: string,
	type: 'illust',
	imageUrls: ImageUrls,
	caption: string,
	restrict: number,
	user: number,
	tags: Array<{name: string}>,
	tools: Array<string>,
	createDate: string,
	pageCount: number,
	width: number,
	height: number,
	metaSinglePage: {
		originalImageUrl?: string
	},
	metaPages?: Array<{
		imageUrls: {
			squareMedium: string,
			medium: string,
			large: string,
			original: string
		}
	}>,
	totalView: number,
	totalBookmarks: number,
	isBookmarked: bool,
	visible: bool
};

export type Illusts = {[key: number]: Illust};
