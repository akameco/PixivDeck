// @flow
import type { State as AppState } from '../state'

import type { Illusts } from './illust'
import type { Users } from './user'

export type Response = {
  response: {
    entities: Object,
    result: Array<number>,
  },
}

export type State = {
  illustById: Illusts,
  userById: Users,
} & AppState
