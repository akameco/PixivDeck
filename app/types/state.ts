import { State as ColumnBookmarkState } from '../containers/ColumnBookmark/reducer'
import { State as ColumnFollowState } from '../containers/ColumnFollow/reducer'
import { State as ColumnHistoryState } from '../containers/ColumnHistory/reducer'
import { State as ColumnManagerState } from '../containers/ColumnManager/reducer'
import { State as ColumnRankingState } from '../containers/ColumnRanking/reducer'
import { State as ColumnRankingR18State } from '../containers/ColumnRankingR18/reducer'
import { State as ColumnRecommendedState } from '../containers/ColumnRecommended/reducer'
import { State as ColumnSearchState } from '../containers/ColumnSearch/reducer'
import { State as ColumnUserIllustState } from '../containers/ColumnUserIllust/reducer'
import { State as DrawerManagerState } from '../containers/DrawerManager/reducer'
import { State as HeaderContainerState } from '../containers/HeaderContainer/reducer'
import { State as IllustByIdState } from '../containers/IllustById/reducer'
import { State as IllustPreviewState } from '../containers/IllustPreview/reducer'
import { State as LanguageState } from '../containers/Language/reducer'
import { State as LoginModalState } from '../containers/LoginModal/reducer'
import { State as MangaPreviewState } from '../containers/MangaPreview/reducer'
import { State as ModalManegerState } from '../containers/ModalManeger/reducer'
import { State as SearchFieldState } from '../containers/SearchField/reducer'
import { State as SettingModalState } from '../containers/SettingModal/reducer'
import { State as TableState } from '../containers/Table/reducer'
import { State as UserByIdState } from '../containers/UserById/reducer'
import { State as UserDrawerContainerState } from '../containers/UserDrawerContainer/reducer'
import { State as UserPopoverContainerState } from '../containers/UserPopoverContainer/reducer'

export interface State {
  ColumnBookmark: ColumnBookmarkState
  ColumnFollow: ColumnFollowState
  ColumnHistory: ColumnHistoryState
  ColumnManager: ColumnManagerState
  ColumnRankingR18: ColumnRankingR18State
  ColumnRanking: ColumnRankingState
  ColumnRecommended: ColumnRecommendedState
  ColumnSearch: ColumnSearchState
  ColumnUserIllust: ColumnUserIllustState
  DrawerManager: DrawerManagerState
  HeaderContainer: HeaderContainerState
  IllustById: IllustByIdState
  IllustPreview: IllustPreviewState
  Language: LanguageState
  LoginModal: LoginModalState
  MangaPreview: MangaPreviewState
  ModalManeger: ModalManegerState
  SearchField: SearchFieldState
  SettingModal: SettingModalState
  Table: TableState
  UserById: UserByIdState
  UserDrawerContainer: UserDrawerContainerState
  UserPopoverContainer: UserPopoverContainerState
}
