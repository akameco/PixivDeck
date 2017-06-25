// @flow
import type { State as HeaderContainerState } from './containers/HeaderContainer/reducer'
import type { State as LanguageState } from './containers/Language/reducer'
import type { State as LoginModalState } from './containers/LoginModal/reducer'
import type { State as MangaPreviewState } from './containers/MangaPreview/reducer'
import type { State as ModalManegerState } from './containers/ModalManeger/reducer'
import type { State as SettingModalState } from './containers/SettingModal/reducer'
import type { State as UserPopoverContainerState } from './containers/UserPopoverContainer/reducer'

export type State = {
  HeaderContainer: HeaderContainerState,
  Language: LanguageState,
  LoginModal: LoginModalState,
  MangaPreview: MangaPreviewState,
  ModalManeger: ModalManegerState,
  SettingModal: SettingModalState,
  UserPopoverContainer: UserPopoverContainerState,
}
