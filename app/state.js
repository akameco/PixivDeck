// @flow
import type { State as Column2State } from './containers/Column2/reducer'
import type { State as ColumnContainerState } from './containers/ColumnContainer/reducer'
import type { State as DrawerManagerState } from './containers/DrawerManager/reducer'
import type { State as HeaderContainerState } from './containers/HeaderContainer/reducer'
import type { State as IllustPreviewState } from './containers/IllustPreview/reducer'
import type { State as LanguageState } from './containers/Language/reducer'
import type { State as LoginModalState } from './containers/LoginModal/reducer'
import type { State as MangaPreviewState } from './containers/MangaPreview/reducer'
import type { State as ModalManegerState } from './containers/ModalManeger/reducer'
import type { State as SettingModalState } from './containers/SettingModal/reducer'
import type { State as TableState } from './containers/Table/reducer'
import type { State as UserDrawerContainerState } from './containers/UserDrawerContainer/reducer'
import type { State as UserPopoverContainerState } from './containers/UserPopoverContainer/reducer'

export type State = {
  Column2: Column2State,
  ColumnContainer: ColumnContainerState,
  DrawerManager: DrawerManagerState,
  HeaderContainer: HeaderContainerState,
  IllustPreview: IllustPreviewState,
  Language: LanguageState,
  LoginModal: LoginModalState,
  MangaPreview: MangaPreviewState,
  ModalManeger: ModalManegerState,
  SettingModal: SettingModalState,
  Table: TableState,
  UserDrawerContainer: UserDrawerContainerState,
  UserPopoverContainer: UserPopoverContainerState,
}
