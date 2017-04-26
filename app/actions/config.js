// @flow
import type { Action } from 'types'

export const setCaptionShow = (isShow: boolean): Action => ({
  type: 'ILLUST_CAPTION_SHOW',
  isShow,
})

export const setOnlyIllust = (isShow: boolean): Action => ({
  type: 'ILLUST_ONLY',
  isShow,
})
