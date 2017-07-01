// @flow
import type { State as AppState } from '../state'

export type Response = {
  response: {
    entities: Object,
    result: Array<number>,
  },
}

export type State = AppState
