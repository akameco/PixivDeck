// @flow
export type SET_SHOW_ONLY_ILLUST_TYPE = 'SettingModal/SET_SHOW_ONLY_ILLUST'
export type SET_SHOW_CAPTION_TYPE = 'SettingModal/SET_SHOW_CAPTION'
export type ADD_TAG_FILTER_TYPE = 'SettingModal/ADD_TAG_FILTER'
export type REMOVE_TAG_FILTER_TYPE = 'SettingModal/REMOVE_TAG_FILTER'

export type Action =
  | {|
      +type: SET_SHOW_ONLY_ILLUST_TYPE | SET_SHOW_CAPTION_TYPE,
      +show: boolean,
    |}
  | {
      +type: ADD_TAG_FILTER_TYPE | REMOVE_TAG_FILTER_TYPE,
      +tag: string,
    }

// import {
//   addTagFilter,
//   removeTagFilter,
//   setCaptionShow,
//   setOnlyIllust,
// } from 'actions'

// export const setCaptionShow = (isShow: boolean): Action => ({
//   type: 'ILLUST_CAPTION_SHOW',
//   isShow,
// })
//
// export const setOnlyIllust = (isShow: boolean): Action => ({
//   type: 'ILLUST_ONLY',
//   isShow,
// })
