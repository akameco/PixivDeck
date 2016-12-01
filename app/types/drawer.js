// @flow
import type {User, Profile} from './user'

export type Drawer = {
	illusts: number[],
	mangas: number[],
	user: ?User,
	profile: ?Profile,
};

export type DrawerAction =
	| {|type: 'DRAWER_ADD_ILLUSTS', ids: number[]|}
	| {|type: 'DRAWER_ADD_MANGAS', ids: number[]|}
	| {|type: 'DRAWER_ADD_USER', user: User|}
	| {|type: 'DRAWER_ADD_PROFILE', profile: Profile|}
;
