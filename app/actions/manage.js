// @flow
import type { Action } from 'types'
import * as Actions from 'constants/manage'

export const setCurrentIllust = (id: number): Action => ({
  type: Actions.SET_CURRENT_ILLUST,
  id,
})
