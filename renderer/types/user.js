// @flow
export type User = {
	name: string,
	account: string,
	profileImageUrls: {
		px50x50: string
	}
}

export type Users = {[key: number]: User} | Object;
