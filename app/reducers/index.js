// @flow
import { combineReducers } from 'redux'
import Language from '../containers/Language/reducer'
import ModalManeger from '../containers/ModalManeger/reducer'
import SettingModal from '../containers/SettingModal/reducer'
import HeaderContainer from '../containers/HeaderContainer/reducer'
import MangaPreview from '../containers/MangaPreview/reducer'
import LoginModal from '../containers/LoginModal/reducer'
import UserPopoverContainer from '../containers/UserPopoverContainer/reducer'
import IllustPreview from '../containers/IllustPreview/reducer'
import DrawerManager from '../containers/DrawerManager/reducer'
import UserDrawerContainer from '../containers/UserDrawerContainer/reducer'
import Table from '../containers/Table/reducer'
import ColumnManager from '../containers/ColumnManager/reducer'
import ColumnRanking from '../containers/ColumnRanking/reducer'
import ColumnRankingR18 from '../containers/ColumnRankingR18/reducer'
import ColumnBookmark from '../containers/ColumnBookmark/reducer'
import ColumnFollow from '../containers/ColumnFollow/reducer'
import ColumnUserIllust from '../containers/ColumnUserIllust/reducer'
import ColumnSearch from '../containers/ColumnSearch/reducer'
import SearchField from '../containers/SearchField/reducer'
import IllustById from '../containers/IllustById/reducer'
import UserById from '../containers/UserById/reducer'

export default combineReducers({
  Language,
  IllustById,
  UserById,
  ModalManeger,
  SettingModal,
  HeaderContainer,
  MangaPreview,
  LoginModal,
  UserPopoverContainer,
  IllustPreview,
  DrawerManager,
  UserDrawerContainer,
  Table,
  ColumnManager,
  ColumnRanking,
  ColumnRankingR18,
  ColumnBookmark,
  ColumnFollow,
  ColumnUserIllust,
  ColumnSearch,
  SearchField,
})

// const filterByTags = (illust: Illust, tags: Array<string>): boolean =>
//   illust.tags.every(t => tags.every(tag => !t.name.includes(tag)))
