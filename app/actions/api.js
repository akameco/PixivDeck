// @flow
import type { Action } from 'types'

// eslint-disable-next-line
export const apiRequestSuccess = (response: Object): Action => ({
  type: 'API_REQUEST_SUCCESS',
  response,
})
