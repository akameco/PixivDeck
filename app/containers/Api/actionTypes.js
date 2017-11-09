// @flow
import type { Response } from 'services/api'

export const API_REQUEST_SUCCESS: 'Api/API_REQUEST_SUCCESS' =
  'Api/API_REQUEST_SUCCESS'

export const Actions = {
  API_REQUEST_SUCCESS,
}

export type ApiRequestSuccess = {
  type: typeof API_REQUEST_SUCCESS,
  response: Response,
}

export type Action = ApiRequestSuccess
