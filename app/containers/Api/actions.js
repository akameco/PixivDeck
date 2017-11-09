// @flow
import type { Response } from 'services/api'

import { API_REQUEST_SUCCESS } from './actionTypes'
import type { ApiRequestSuccess } from './actionTypes'

export function apiRequestSuccess(response: Response): ApiRequestSuccess {
  return {
    type: API_REQUEST_SUCCESS,
    response,
  }
}
