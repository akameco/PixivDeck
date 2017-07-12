// @flow
import { combineReducers } from 'redux'
import ColumnBookmark from 'containers/ColumnBookmark/reducer'
import ColumnFollow from 'containers/ColumnFollow/reducer'
import ColumnHistory from 'containers/ColumnHistory/reducer'
import ColumnManager from 'containers/ColumnManager/reducer'
import ColumnRanking from 'containers/ColumnRanking/reducer'
import ColumnRankingR18 from 'containers/ColumnRankingR18/reducer'
import ColumnRecommended from 'containers/ColumnRecommended/reducer'
import ColumnSearch from 'containers/ColumnSearch/reducer'
import ColumnUserIllust from 'containers/ColumnUserIllust/reducer'
import DrawerManager from 'containers/DrawerManager/reducer'
import HeaderContainer from 'containers/HeaderContainer/reducer'
import IllustById from 'containers/IllustById/reducer'
import IllustPreview from 'containers/IllustPreview/reducer'
import Language from 'containers/Language/reducer'
import LoginModal from 'containers/LoginModal/reducer'
import MangaPreview from 'containers/MangaPreview/reducer'
import ModalManeger from 'containers/ModalManeger/reducer'
import SearchField from 'containers/SearchField/reducer'
import SettingModal from 'containers/SettingModal/reducer'
import Table from 'containers/Table/reducer'
import UserById from 'containers/UserById/reducer'
import UserDrawerContainer from 'containers/UserDrawerContainer/reducer'
import UserPopoverContainer from 'containers/UserPopoverContainer/reducer'

export default combineReducers({
  ColumnBookmark,
  ColumnFollow,
  ColumnHistory,
  ColumnManager,
  ColumnRanking,
  ColumnRankingR18,
  ColumnRecommended,
  ColumnSearch,
  ColumnUserIllust,
  DrawerManager,
  HeaderContainer,
  IllustById,
  IllustPreview,
  Language,
  LoginModal,
  MangaPreview,
  ModalManeger,
  SearchField,
  SettingModal,
  Table,
  UserById,
  UserDrawerContainer,
  UserPopoverContainer,
})
