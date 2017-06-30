// @flow
import type { User, Profile } from 'types/user'
import type { Response } from '../../api/schema'

export type FETCH_ILLUST_TYPE = 'UserDrawer/FETCH_ILLUST'
export type FETCH_ILLUST_SUCCESS_TYPE = 'UserDrawer/FETCH_ILLUST_SUCCESS'
export type FETCH_ILLUST_FAILURE_TYPE = 'UserDrawer/FETCH_ILLUST_FAILURE'

export type FETCH_MANGA_TYPE = 'UserDrawer/FETCH_MANGA'
export type FETCH_MANGA_SUCCESS_TYPE = 'UserDrawer/FETCH_MANGA_SUCCESS'
export type FETCH_MANGA_FAILURE_TYPE = 'UserDrawer/FETCH_MANGA_FAILURE'

export type ADD_DRAWER_USER_TYPE = 'UserDrawer/ADD_DRAWER_USER'
export type ADD_DRAWER_PROFILE_TYPE = 'UserDrawer/ADD_DRAWER_PROFILE'

export type ADD_DRAWER_ILLUST_IDS_TYPE = 'UserDrawer/ADD_DRAWER_ILLUST_IDS'
export type ADD_DRAWER_MANGA_IDS_TYPE = 'UserDrawer/ADD_DRAWER_MANGA_IDS'

export type SET_NEXT_ILLUST_URL_TYPE = 'UserDrawer/SET_NEXT_ILLUST_URL'
export type SET_NEXT_MANGA_URL_TYPE = 'UserDrawer/SET_NEXT_MANGA_URL'

export type FETCH_USER_DETAIL_TYPE = 'UserDrawer/FETCH_USER_DETAIL'
export type FETCH_USER_DETAIL_SUCCESS_TYPE =
  'UserDrawer/FETCH_USER_DETAIL_SUCCESS'
export type FETCH_USER_DETAIL_FAILURE_TYPE =
  'UserDrawer/FETCH_USER_DETAIL_FAILURE'

export type NEXT_ILLUST_PAGE_TYPE = 'UserDrawer/NEXT_PAGE_ILLUST'
export type NEXT_ILLUST_PAGE_SUCCESS_TYPE =
  'UserDrawer/NEXT_ILLUST_PAGE_SUCCESS'
export type NEXT_ILLUST_PAGE_FAILURE_TYPE =
  'UserDrawer/NEXT_ILLUST_PAGE_FAILURE'

export type NEXT_MANGA_PAGE_TYPE = 'UserDrawer/NEXT_PAGE_MANGA_'
export type NEXT_MANGA_PAGE_SUCCESS_TYPE = 'UserDrawer/NEXT_MANGA_PAGE_SUCCESS'
export type NEXT_MANGA_PAGE_FAILURE_TYPE = 'UserDrawer/NEXT_MANGA_PAGE_FAILURE'

export type Action =
  | {|
      +type: FETCH_ILLUST_TYPE | FETCH_MANGA_TYPE | FETCH_USER_DETAIL_TYPE,
      +id: number,
    |}
  | {|
      +type: ADD_DRAWER_ILLUST_IDS_TYPE | ADD_DRAWER_MANGA_IDS_TYPE,
      +ids: number[],
    |}
  | {|
      +type: SET_NEXT_ILLUST_URL_TYPE | SET_NEXT_MANGA_URL_TYPE,
      +url: string,
    |}
  | {| +type: ADD_DRAWER_USER_TYPE, +user: User |}
  | {| +type: ADD_DRAWER_PROFILE_TYPE, +profile: Profile |}
  | {| +type: NEXT_ILLUST_PAGE_TYPE | NEXT_MANGA_PAGE_TYPE |}
  | {|
      +type: FETCH_ILLUST_SUCCESS_TYPE | FETCH_MANGA_SUCCESS_TYPE,
      +response: Response,
      +ids: Array<number>,
    |}
  | {|
      +type: FETCH_ILLUST_FAILURE_TYPE | FETCH_MANGA_FAILURE_TYPE,
      +error: string,
    |}
