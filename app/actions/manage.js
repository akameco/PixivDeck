// @flow
import type { Action } from 'types'
import * as Actions from 'constants/manage'

export const openDrawer = (id: number): Action => ({
  type: Actions.OPEN_DRAWER,
  id,
})
export const closeDrawer = (): Action => ({ type: Actions.CLOSE_DRAWER })

export const startImgLoading = (): Action => ({
  type: Actions.START_IMG_LOADING,
})
export const finishImgLoaded = (): Action => ({
  type: Actions.FINISH_IMG_LOADED,
})

export const setCurrentIllust = (id: number): Action => ({
  type: Actions.SET_CURRENT_ILLUST,
  id,
})
