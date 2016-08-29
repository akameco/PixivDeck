// @flow
export type User = {
	id: number,
	name: string,
	account: string,
	profileImageUrls: {
		px50x50: string
	}
}

export type Users = {[key: number]: User} | Object;
