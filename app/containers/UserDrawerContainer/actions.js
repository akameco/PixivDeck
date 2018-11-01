// @flow
import type { User, Profile } from 'types/user'
import type { Action } from './actionTypes'
import {
  FETCH_ILLUST,
  FETCH_MANGA,
  FETCH_USER_DETAIL,
  SET_NEXT_ILLUST_URL,
  SET_NEXT_MANGA_URL,
  ADD_DRAWER_USER,
  ADD_DRAWER_PROFILE,
  NEXT_ILLUST_PAGE,
  NEXT_MANGA_PAGE,
  FETCH_ILLUST_SUCCESS,
  FETCH_MANGA_SUCCESS,
  ADD_DRAWER_ILLUST_IDS,
  ADD_DRAWER_MANGA_IDS,
  FETCH_ILLUST_FAILURE,
  FETCH_MANGA_FAILURE,
} from './constants'

export function fetchIllust(id: number): Action {
  return {
    type: FETCH_ILLUST,
    id,
  }
}

export function fetchManga(id: number): Action {
  return {
    type: FETCH_MANGA,
    id,
  }
}

export function fetchUserDetail(id: number): Action {
  return {
    type: FETCH_USER_DETAIL,
    id,
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

export function nextIllustPage(): Action {
  return {
    type: NEXT_ILLUST_PAGE,
  }
}

export function nextMangaPage(): Action {
  return {
    type: NEXT_MANGA_PAGE,
  }
}

export function fetchIllustSuccess(ids: Array<number>): Action {
  return {
    type: FETCH_ILLUST_SUCCESS,
    ids,
  }
}

export function fetchMangaSuccess(ids: Array<number>): Action {
  return {
    type: FETCH_MANGA_SUCCESS,
    ids,
  }
}

export function addDrawerIllustIds(ids: Array<number>): Action {
  return {
    type: ADD_DRAWER_ILLUST_IDS,
    ids,
  }
}

export function addDrawerMangaIds(ids: Array<number>): Action {
  return {
    type: ADD_DRAWER_MANGA_IDS,
    ids,
  }
}

export function fetchIllustFailure(error: string): Action {
  return {
    type: FETCH_ILLUST_FAILURE,
    error,
  }
}

export function fetchMangaFailure(error: string): Action {
  return {
    type: FETCH_MANGA_FAILURE,
    error,
  }
}
