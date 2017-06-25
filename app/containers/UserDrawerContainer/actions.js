// @flow
import type { Action } from './actionTypes.js'
import {
  FETCH_DRAWER_ILLUST,
  ADD_DRAWER_ILLUSTS,
  SET_NEXT_ILLUST_URL,
  SET_NEXT_MANGA_URL,
  ADD_DRAWER_USER,
  ADD_DRAWER_PROFILE,
  FETCH_USER_DETAIL,
  NEXT_DRAWER_PAGE,
} from './constants'
import type { User, Profile } from 'types/user'
import type { DrawerType } from './reducer'

export function fetchDrawerIllust(id: number, drawerType: DrawerType): Action {
  return {
    type: FETCH_DRAWER_ILLUST,
    id,
    drawerType,
  }
}

export function addDrawerIllusts(
  ids: number[],
  drawerType: DrawerType
): Action {
  return {
    type: ADD_DRAWER_ILLUSTS,
    ids,
    drawerType,
  }
}

export function setNextIllustUrl(url: string): Action {
  return {
    type: SET_NEXT_ILLUST_URL,
    url,
  }
}

export function setNextMangaUrl(url: string): Action {
  return {
    type: SET_NEXT_MANGA_URL,
    url,
  }
}

export function addDrawerUser(user: User): Action {
  return {
    type: ADD_DRAWER_USER,
    user,
  }
}

export function addDrawerProfile(profile: Profile): Action {
  return {
    type: ADD_DRAWER_PROFILE,
    profile,
  }
}

export function fetchUserDetail(id: number): Action {
  return {
    type: FETCH_USER_DETAIL,
    id,
  }
}

export function nextDrawerPage(drawerType: DrawerType): Action {
  return {
    type: NEXT_DRAWER_PAGE,
    drawerType,
  }
}
