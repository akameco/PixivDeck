// @flow
import type { State as LanguageProviderState } from 'containers/LanguageProvider/type'
import type { ColumnType } from './column'
import type { Manage } from './manage'
import type { Filter } from './filter'
import type { Illusts } from './illust'
import type { Users } from './user'
import type { Auth } from './auth'
import type { Config } from './config'
import type { Drawer } from './drawer'
import type { Popover } from './popover'
import type { State as ModalManeger } from '../containers/ModalManeger/reducer'

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
  language: LanguageProviderState,
  columns: Array<ColumnType>,
  auth: Auth,
  entities: Entities,
  manage: Manage,
  filter: Filter,
  config: Config,
  illustById: Illusts,
  userById: Users,
  drawer: Drawer,
  popover: Popover,
  ModalManeger: ModalManeger,
}
