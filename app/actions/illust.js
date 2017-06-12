// @flow
import type { Action } from 'types'
import * as Actions from 'constants/illust'

// eslint-disable-next-line
export const addBookmark = (id: number, isPublic: boolean): Action => ({
  type: Actions.ADD_BOOKMARK,
  id,
  isPublic,
})
