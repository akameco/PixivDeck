// @flow
export type User = {
	id: number,
	name: string,
	account: string,
	profileImageUrls: $Shape<{
		medium: string
	}>,
	isFollowed: bool
};

export type Users = {[key: number]: User};
