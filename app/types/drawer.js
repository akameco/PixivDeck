// @flow
import type { User, Profile } from './user'

export type Drawer = {
  illusts: number[],
  mangas: number[],
  user: ?User,
  profile: ?Profile,
  nextIllustUrl: ?string,
  nextMangaUrl: ?string,
}

export type DrawerType = 'illust' | 'manga'

export type DrawerAction =
  | {| type: 'DRAWER_FETCH_ILLUST', id: number, drawerType: DrawerType |}
  | {| type: 'DRAWER_NEXT_PAGE', drawerType: DrawerType |}
  | {| type: 'FETCH_USER_DETAIL', id: number |}
