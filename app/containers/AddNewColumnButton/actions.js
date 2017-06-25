// @flow
import type { User } from '../../types/user'
import type { Action } from './actionTypes.js'
import { ADD_USER_ILLUST } from './constants'

export function addUserIllust(user: User): Action {
  return {
    type: ADD_USER_ILLUST,
    user,
  }
}
