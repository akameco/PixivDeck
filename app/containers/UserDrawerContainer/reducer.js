// @flow
import union from 'lodash.union'
import type { User, Profile } from 'types/user'
import type { Action } from '../../action'
import * as ManegerActions from '../DrawerManager/constants'
import * as Actions from './constants'

export type DrawerType = 'illust' | 'manga'

export type State = {
  user: ?User,
  profile: ?Profile,
  illustList: number[],
  mangaList: number[],
  nextIllustUrl: ?string,
  nextMangaUrl: ?string,
  isLoading: boolean,
}

const initialState: State = {
  user: null,
  profile: null,
  illustList: [],
  mangaList: [],
  nextIllustUrl: null,
  nextMangaUrl: null,
  isLoading: false,
}

const setNextUrl = (type: DrawerType, nextUrl: string) => {
  return type === 'illust'
    ? { nextIllustUrl: nextUrl }
    : { nextMangaUrl: nextUrl }
}

function addDrawerIllusts(type: DrawerType, illusts: number[], ids: number[]) {
  if (type === 'manga') {
    return { mangaList: union(illusts, ids) }
  }
  return { illustList: union(illusts, ids) }
}

export default function(
  state: State = initialState,
  action: Action
): $Shape<State> {
  switch (action.type) {
    case ManegerActions.CLOSE_DRAWER:
      return initialState
    case Actions.ADD_DRAWER_USER:
      return { ...state, user: action.user }
    case Actions.ADD_DRAWER_PROFILE:
      return { ...state, profile: action.profile }
    case Actions.ADD_DRAWER_ILLUSTS:
      // todo 分割
      return {
        ...state,
        ...addDrawerIllusts(action.drawerType, state.illustList, action.ids),
      }
    case Actions.SET_NEXT_URL:
      return { ...state, ...setNextUrl(action.drawerType, action.url) }
    default:
      return state
  }
}
