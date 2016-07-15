// @flow
export type User = {
	name: string,
	account: string,
	profileImageUrls: Object
}

export type Users = {[key: number]: User} | Object;
