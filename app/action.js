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

import type { Action as IllustPreviewAction } from './containers/IllustPreview/actionTypes'

import type { Action as AddNewColumnButtonAction } from './containers/AddNewColumnButton/actionTypes'

import type { Action as BookmarkButtonAction } from './containers/BookmarkButton/actionTypes'

import type { Action as UserDrawerContainerAction } from './containers/UserDrawerContainer/actionTypes'

import type { Action as DrawerManagerAction } from './containers/DrawerManager/actionTypes'

import type { Action as BoxContainerAction } from './containers/BoxContainer/actionTypes'

import type { Action as TableAction } from './containers/Table/actionTypes'

import type { Action as ColumnManagerAction } from './containers/ColumnManager/actionTypes'

import type { Action as ColumnRankingAction } from './containers/ColumnRanking/actionTypes'

import type { Action as ColumnRankingR18Action } from './containers/ColumnRankingR18/actionTypes'

import type { Action as ColumnBookmarkAction } from './containers/ColumnBookmark/actionTypes'

import type { Action as ColumnFollowAction } from './containers/ColumnFollow/actionTypes'

import type { Action as ColumnUserIllustAction } from './containers/ColumnUserIllust/actionTypes'

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
  | IllustPreviewAction
  | AddNewColumnButtonAction
  | BookmarkButtonAction
  | UserDrawerContainerAction
  | DrawerManagerAction
  | BoxContainerAction
  | TableAction
  | ColumnManagerAction
  | ColumnRankingAction
  | ColumnRankingR18Action
  | ColumnBookmarkAction
  | ColumnFollowAction
  | ColumnUserIllustAction
