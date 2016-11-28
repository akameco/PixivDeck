// @flow
export type User = {|
	id: number,
	name: string,
	account: string,
	profileImageUrls: {|
		medium: string
	|},
	isFollowed: bool,
	comment?: string
|};

export type Profile = {
	background_image_url: string,
	birth: string,
	gender: string,
	is_premium: bool,
	region: string,
	total_follow_users: number,
	total_follower: number,
	total_illust_bookmarks_public: number,
	total_illusts: number,
	total_manga: number,
	total_mypixiv_users: number,
	total_novels: number,
	twitter_accounts: string,
	twitter_url: ?string,
	webpage: string
};

export type Users = {[key: number]: User};
