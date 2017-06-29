// @flow
import * as Actions from 'constants/addColumn'
import type { Action } from 'types'

export const addBookmarkColumn = (isPublic: boolean): Action => ({
  type: Actions.ADD_COLUMN_BOOKMARK,
  isPublic,
})

export const addFollowColumn = (isPublic: boolean): Action => ({
  type: Actions.ADD_COLUMN_FOLLOW,
  isPublic,
})
