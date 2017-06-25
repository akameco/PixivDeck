// @flow
import type { Action as UserPopoverContainerAction } from './containers/UserPopoverContainer/actionTypes'

import type { Action as LanguageAction } from './containers/Language/actionTypes'

import type { Action as SearchFieldAction } from './containers/SearchField/actionTypes'

import type { Action as ModalManegerAction } from './containers/ModalManeger/actionTypes'

import type { Action as SettingModalAction } from './containers/SettingModal/actionTypes'

import type { Action as HeaderContainerAction } from './containers/HeaderContainer/actionTypes'

import type { Action as MangaPreviewAction } from './containers/MangaPreview/actionTypes'

import type { Action as LoginModalAction } from './containers/LoginModal/actionTypes'

import type { Action as FollowButtonAction } from './containers/FollowButton/actionTypes'

export type Action =
  | UserPopoverContainerAction
  | LanguageAction
  | SearchFieldAction
  | ModalManegerAction
  | SettingModalAction
  | HeaderContainerAction
  | MangaPreviewAction
  | LoginModalAction
  | FollowButtonAction
