// @flow
import { ADD_NOTIFY, ADD_NOTIFY_W_ITH_ILLUST } from './actionTypes'
import type { AddNotify, AddNotifyWIthIllust } from './actionTypes'

export function addNotify(): AddNotify {
  return {
    type: ADD_NOTIFY,
  }
}
export function addNotifyWIthIllust(
  title: string,
  id: number
): AddNotifyWIthIllust {
  return {
    type: ADD_NOTIFY_W_ITH_ILLUST,
    title,
    id,
  }
}
