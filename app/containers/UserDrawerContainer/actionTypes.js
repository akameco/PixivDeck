// @flow
import type { User, Profile } from 'types/user'
import type { DrawerType } from './reducer'

export type FETCH_DRAWER_ILLUST_TYPE = 'UserDrawer/FETCH_DRAWER_ILLUST'
export type FETCH_DRAWER_ILLUST_SUCCESS_TYPE =
  'UserDrawer/FETCH_DRAWER_ILLUST_SUCCESS'
export type FETCH_DRAWER_ILLUST_FAILURE_TYPE =
  'UserDrawer/FETCH_DRAWER_ILLUST_FAILURE'

export type ADD_DRAWER_USER_TYPE = 'UserDrawer/ADD_DRAWER_USER'
export type ADD_DRAWER_ILLUSTS_TYPE = 'UserDrawer/ADD_DRAWER_ILLUSTS'
export type ADD_DRAWER_PROFILE_TYPE = 'UserDrawer/ADD_DRAWER_PROFILE'

export type SET_NEXT_ILLUST_URL_TYPE = 'UserDrawer/SET_NEXT_ILLUST_URL'
export type SET_NEXT_MANGA_URL_TYPE = 'UserDrawer/SET_NEXT_MANGA_URL'

export type FETCH_USER_DETAIL_TYPE = 'UserDrawer/FETCH_USER_DETAIL'
export type FETCH_USER_DETAIL_SUCCESS_TYPE =
  'UserDrawer/FETCH_USER_DETAIL_SUCCESS'
export type FETCH_USER_DETAIL_FAILURE_TYPE =
  'UserDrawer/FETCH_USER_DETAIL_FAILURE'

export type NEXT_DRAWER_PAGE_TYPE = 'UserDrawer/NEXT_DRAWER_PAGE'
export type NEXT_DRAWER_PAGE_SUCCESS_TYPE =
  'UserDrawer/NEXT_DRAWER_PAGE_SUCCESS'
export type NEXT_DRAWER_PAGE_FAILURE_TYPE =
  'UserDrawer/NEXT_DRAWER_PAGE_FAILURE'

export type Action =
  | {|
      +type: FETCH_DRAWER_ILLUST_TYPE,
      +id: number,
      +drawerType: DrawerType,
    |}
  | {|
      +type: ADD_DRAWER_ILLUSTS_TYPE,
      +ids: number[],
      +drawerType: DrawerType,
    |}
  | {|
      +type: SET_NEXT_ILLUST_URL_TYPE | SET_NEXT_MANGA_URL_TYPE,
      +url: string,
    |}
  | {| +type: ADD_DRAWER_USER_TYPE, +user: User |}
  | {| +type: ADD_DRAWER_PROFILE_TYPE, +profile: Profile |}
  | {| +type: FETCH_USER_DETAIL_TYPE, +id: number |}
  | {| +type: NEXT_DRAWER_PAGE_TYPE, +drawerType: DrawerType |}
