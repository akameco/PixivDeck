// @flow
// $FlowFixMe
import { fork, all } from 'redux-saga/effects'
import BookmarkButton from 'containers/BookmarkButton/saga'
import BoxContainer from 'containers/BoxContainer/saga'
import ColumnBookmark from 'containers/ColumnBookmark/saga'
import ColumnFollow from 'containers/ColumnFollow/saga'
import ColumnHistory from 'containers/ColumnHistory/saga'
import ColumnRanking from 'containers/ColumnRanking/saga'
import ColumnRankingR18 from 'containers/ColumnRankingR18/saga'
import ColumnRecommended from 'containers/ColumnRecommended/saga'
import ColumnSearch from 'containers/ColumnSearch/saga'
import ColumnUserIllust from 'containers/ColumnUserIllust/saga'
import FollowButton from 'containers/FollowButton/saga'
import LoginModal from 'containers/LoginModal/saga'
import SearchField from 'containers/SearchField/saga'
import SettingModal from 'containers/SettingModal/saga'
import Table from 'containers/Table/saga'
import UserDrawerContainer from 'containers/UserDrawerContainer/saga'
import UserPopoverContainer from 'containers/UserPopoverContainer/saga'
import Notify from 'containers/Notify/saga'
// import Api from 'containers/Api/saga'

function* root(): Generator<*, void, void> {
  yield all([
    // fork(Api),
    fork(BookmarkButton),
    fork(BoxContainer),
    fork(ColumnBookmark),
    fork(ColumnFollow),
    fork(ColumnHistory),
    fork(ColumnRanking),
    fork(ColumnRankingR18),
    fork(ColumnRecommended),
    fork(ColumnSearch),
    fork(ColumnUserIllust),
    fork(FollowButton),
    fork(LoginModal),
    fork(SearchField),
    fork(SettingModal),
    fork(Table),
    fork(UserDrawerContainer),
    fork(UserPopoverContainer),
    fork(Notify),
  ])
}

export default root
