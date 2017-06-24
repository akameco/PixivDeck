// @flow
import type { State as LanguageProviderState } from 'containers/LanguageProvider/type'
import type { State as ModalManeger } from '../containers/ModalManeger/reducer'
import type { State as SettingModal } from '../containers/SettingModal/reducer'
import type { ColumnType } from './column'
import type { Manage } from './manage'
import type { Illusts } from './illust'
import type { Users } from './user'
import type { Auth } from './auth'
import type { Drawer } from './drawer'
import type { Popover } from './popover'

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
  illustById: Illusts,
  userById: Users,
  drawer: Drawer,
  popover: Popover,
  ModalManeger: ModalManeger,
  SettingModal: SettingModal,
}
