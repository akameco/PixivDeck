// @flow
import type { Action } from 'types'
import type { Manage } from 'types/manage'

const initManageState: Manage = {
  isLoading: false,
  currentIllustId: null,
}

export default function(
  state: Manage = initManageState,
  action: Action
): $Shape<Manage> {
  switch (action.type) {
    case 'SET_CURRENT_ILLUST':
      return { ...state, currentIllustId: action.id }
    case 'START_LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}
