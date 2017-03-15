// @flow
import type {Action} from 'types';

export const apiRequestSuccess = (response: Object): Action => ({
  type: 'API_REQUEST_SUCCESS',
  response,
});
