// @flow
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

    case Actions.FETCH_ILLUST_SUCCESS:
      return { ...state, illustList: action.ids }

    case Actions.FETCH_MANGA_SUCCESS:
      return { ...state, mangaList: action.ids }

    case Actions.SET_NEXT_ILLUST_URL:
      return { ...state, nextIllustUrl: action.url }

    case Actions.SET_NEXT_MANGA_URL:
      return { ...state, nextMangaUrl: action.url }

    default:
      return state
  }
}
