// @flow
import type { Response } from 'services/api'

export type API_REQUEST_SUCCESS_TYPE = 'Api/API_REQUEST_SUCCESS'

export type Action = {
  +type: API_REQUEST_SUCCESS_TYPE,
  +response: Response,
}
