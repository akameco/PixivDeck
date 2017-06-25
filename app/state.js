// @flow
import type { State as DrawerManagerState } from './containers/DrawerManager/reducer'
import type { State as HeaderContainerState } from './containers/HeaderContainer/reducer'
import type { State as IllustPreviewState } from './containers/IllustPreview/reducer'
import type { State as LanguageState } from './containers/Language/reducer'
import type { State as LoginModalState } from './containers/LoginModal/reducer'
import type { State as MangaPreviewState } from './containers/MangaPreview/reducer'
import type { State as ModalManegerState } from './containers/ModalManeger/reducer'
import type { State as SettingModalState } from './containers/SettingModal/reducer'
import type { State as UserDrawerContainerState } from './containers/UserDrawerContainer/reducer'
import type { State as UserPopoverContainerState } from './containers/UserPopoverContainer/reducer'

export type State = {
  DrawerManager: DrawerManagerState,
  HeaderContainer: HeaderContainerState,
  IllustPreview: IllustPreviewState,
  Language: LanguageState,
  LoginModal: LoginModalState,
  MangaPreview: MangaPreviewState,
  ModalManeger: ModalManegerState,
  SettingModal: SettingModalState,
  UserDrawerContainer: UserDrawerContainerState,
  UserPopoverContainer: UserPopoverContainerState,
}
