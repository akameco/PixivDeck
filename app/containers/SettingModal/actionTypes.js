// @flow
export const SET_SHOW_ONLY_ILLUST: 'SettingModal/SET_SHOW_ONLY_ILLUST' =
  'SettingModal/SET_SHOW_ONLY_ILLUST'
export const SET_SHOW_CAPTION: 'SettingModal/SET_SHOW_CAPTION' =
  'SettingModal/SET_SHOW_CAPTION'
export const ADD_TAG_FILTER: 'SettingModal/ADD_TAG_FILTER' =
  'SettingModal/ADD_TAG_FILTER'
export const REMOVE_TAG_FILTER: 'SettingModal/REMOVE_TAG_FILTER' =
  'SettingModal/REMOVE_TAG_FILTER'
export const REMOVE_CACHE: 'SettingModal/REMOVE_CACHE' =
  'SettingModal/REMOVE_CACHE'

export const Actions = {
  SET_SHOW_ONLY_ILLUST,
  SET_SHOW_CAPTION,
  ADD_TAG_FILTER,
  REMOVE_TAG_FILTER,
  REMOVE_CACHE,
}

export type SetShowOnlyIllust = {
  type: typeof SET_SHOW_ONLY_ILLUST,
  show: boolean,
}
export type SetShowCaption = {
  type: typeof SET_SHOW_CAPTION,
  show: boolean,
}
export type AddTagFilter = {
  type: typeof ADD_TAG_FILTER,
}
export type RemoveTagFilter = {
  type: typeof REMOVE_TAG_FILTER,
}
export type RemoveCache = {
  type: typeof REMOVE_CACHE,
}

export type Action =
  | SetShowOnlyIllust
  | SetShowCaption
  | AddTagFilter
  | RemoveTagFilter
  | RemoveCache
