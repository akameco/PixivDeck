// @flow
import type { State as AppState } from '../state'

import type { ColumnType } from './column'
import type { Manage } from './manage'
import type { Illusts } from './illust'
import type { Users } from './user'

export type Entities = {
  users: Users,
  illusts: Illusts,
}

export type Response = {
  response: {
    entities: Entities,
    result: Array<number>,
  },
}

export type State = {
  columns: Array<ColumnType>,
  entities: Entities,
  manage: Manage,
  illustById: Illusts,
  userById: Users,
} & AppState
