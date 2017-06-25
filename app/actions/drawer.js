// @flow
import type { Action } from 'types'
import type { User, Profile } from 'types/user'
import type { DrawerType } from 'types/drawer'
import * as Actions from 'constants/drawer'

export const openUserDrawer = (id: number): Action => ({
  type: 'OPEN_DRAWER',
  id,
})

export const addDrawerIllusts = (
  ids: number[],
  drawerType: DrawerType
): Action => ({ type: 'DRAWER_ADD_ILLUSTS', ids, drawerType })

export const setNextUrl = (url: string, drawerType: DrawerType): Action => ({
  type: 'DRAWER_SET_NEXT_URL',
  url,
  drawerType,
})

export const addDrawerUser = (user: User): Action => ({
  type: 'DRAWER_ADD_USER',
  user,
})

export const addDrawerProfile = (profile: Profile): Action => ({
  type: 'DRAWER_ADD_PROFILE',
  profile,
})

export const fetchDrawerIllust = (
  id: number,
  drawerType: DrawerType
): Action => ({
  type: Actions.DRAWER_FETCH_ILLUST,
  drawerType,
  id,
})

export const nextDrawerPage = (drawerType: DrawerType): Action => ({
  type: Actions.DRAWER_NEXT_PAGE,
  drawerType,
})

export const fetchUserDetail = (id: number): Action => ({
  type: Actions.FETCH_USER_DETAIL,
  id,
})
