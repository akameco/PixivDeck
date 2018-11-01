// @flow
import type { Action } from './actionTypes'
import { ADD_NOTIFY, ADD_NOTIFY_WITH_ILLUST } from './constants'

export function addNotify(): Action {
  return {
    type: ADD_NOTIFY,
  }
}

export function addNotifyWithIllust(title: string, id: number): Action {
  return {
    type: ADD_NOTIFY_WITH_ILLUST,
    title,
    id,
  }
}
