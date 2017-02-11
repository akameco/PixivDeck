// @flow
import type {User, Profile} from './user'

export type Drawer = {
	illusts: number[],
	mangas: number[],
	user: ?User,
	profile: ?Profile,
	nextIllustUrl: ?string,
	nextMangaUrl: ?string,
}

export type DrawerType = | 'illust' | 'manga'

export type DrawerAction =
	| {|type: 'DRAWER_ADD_ILLUSTS', ids: number[], drawerType: DrawerType|}
	| {|type: 'DRAWER_ADD_USER', user: User|}
	| {|type: 'DRAWER_ADD_PROFILE', profile: Profile|}
	| {|type: 'DRAWER_SET_NEXT_URL', url: string, drawerType: DrawerType|}

