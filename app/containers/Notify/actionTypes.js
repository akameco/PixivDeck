// @flow
export const ADD_NOTIFY: 'Notify/ADD_NOTIFY' = 'Notify/ADD_NOTIFY'
export const ADD_NOTIFY_W_ITH_ILLUST: 'Notify/ADD_NOTIFY_W_ITH_ILLUST' =
  'Notify/ADD_NOTIFY_W_ITH_ILLUST'

export const Actions = {
  ADD_NOTIFY,
  ADD_NOTIFY_W_ITH_ILLUST,
}

export type AddNotify = {
  type: typeof ADD_NOTIFY,
}
export type AddNotifyWIthIllust = {
  type: typeof ADD_NOTIFY_W_ITH_ILLUST,
  title: string,
  id: number,
}

export type Action = AddNotify | AddNotifyWIthIllust
