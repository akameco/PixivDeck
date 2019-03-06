import { Action as BookmarkButtonAction } from './containers/BookmarkButton/actionTypes'
import { Action as BoxContainerAction } from './containers/BoxContainer/actionTypes'
import { Action as ColumnBookmarkAction } from './containers/ColumnBookmark/actionTypes'
import { Action as ColumnFollowAction } from './containers/ColumnFollow/actionTypes'
import { Action as ColumnHistoryAction } from './containers/ColumnHistory/actionTypes'
import { Action as ColumnManagerAction } from './containers/ColumnManager/actionTypes'
import { Action as ColumnRankingAction } from './containers/ColumnRanking/actionTypes'
import { Action as ColumnRankingR18Action } from './containers/ColumnRankingR18/actionTypes'
import { Action as ColumnSearchAction } from './containers/ColumnSearch/actionTypes'
import { Action as ColumnUserIllustAction } from './containers/ColumnUserIllust/actionTypes'
import { Action as DrawerManagerAction } from './containers/DrawerManager/actionTypes'
import { Action as FollowButtonAction } from './containers/FollowButton/actionTypes'
import { Action as HeaderContainerAction } from './containers/HeaderContainer/actionTypes'
import { Action as IllustPreviewAction } from './containers/IllustPreview/actionTypes'
import { Action as LanguageAction } from './containers/Language/actionTypes'
import { Action as LoginModalAction } from './containers/LoginModal/actionTypes'
import { Action as MangaPreviewAction } from './containers/MangaPreview/actionTypes'
import { Action as ModalManegerAction } from './containers/ModalManeger/actionTypes'
import { Action as SearchFieldAction } from './containers/SearchField/actionTypes'
import { Action as SettingModalAction } from './containers/SettingModal/actionTypes'
import { Action as TableAction } from './containers/Table/actionTypes'
import { Action as UserDrawerContainerAction } from './containers/UserDrawerContainer/actionTypes'
import { Action as UserPopoverContainerAction } from './containers/UserPopoverContainer/actionTypes'
import { Action as NotifyAction } from './containers/Notify/actionTypes'
import { Action as ApiAction } from './containers/Api/actionTypes'
import { Action as ColumnRecommendedAction } from './containers/ColumnRecommended/actionTypes'

export type Action =
  | BookmarkButtonAction
  | BoxContainerAction
  | ColumnBookmarkAction
  | ColumnFollowAction
  | ColumnHistoryAction
  | ColumnManagerAction
  | ColumnRankingAction
  | ColumnRankingR18Action
  | ColumnSearchAction
  | ColumnUserIllustAction
  | DrawerManagerAction
  | FollowButtonAction
  | HeaderContainerAction
  | IllustPreviewAction
  | LanguageAction
  | LoginModalAction
  | MangaPreviewAction
  | ModalManegerAction
  | SearchFieldAction
  | SettingModalAction
  | TableAction
  | UserDrawerContainerAction
  | UserPopoverContainerAction
  | NotifyAction
  | ApiAction
  | ColumnRecommendedAction
