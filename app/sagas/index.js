// @flow
// $FlowFixMe
import { fork, all } from 'redux-saga/effects' // eslint-disable-line
import UserDrawerContainer from '../containers/UserDrawerContainer/saga'
import Table from '../containers/Table/saga'
import ColumnRanking from '../containers/ColumnRanking/saga'
import ColumnRankingR18 from '../containers/ColumnRankingR18/saga'
import ColumnBookmark from '../containers/ColumnBookmark/saga'
import ColumnFollow from '../containers/ColumnFollow/saga'
import ColumnUserIllust from '../containers/ColumnUserIllust/saga'
import ColumnSearch from '../containers/ColumnSearch/saga'
import FollowButton from '../containers/FollowButton/saga'
import BookmarkButton from '../containers/BookmarkButton/saga'
import SearchField from '../containers/SearchField/saga'

import auth from './auth'
import minBookmarks from './minBookmarks'
import nextColumnPage from './nextColumnPage'
import column from './column'
import popover from './popover'
import misc from './misc'

function* root(): Generator<*, void, void> {
  yield all([
    fork(auth),
    fork(minBookmarks),
    fork(nextColumnPage),
    fork(column),
    fork(FollowButton),
    fork(misc),
    fork(popover),
    fork(UserDrawerContainer),
    fork(Table),
    fork(ColumnRanking),
    fork(ColumnRankingR18),
    fork(ColumnBookmark),
    fork(ColumnFollow),
    fork(ColumnUserIllust),
    fork(ColumnSearch),
    fork(FollowButton),
    fork(BookmarkButton),
    fork(SearchField),
  ])
}

export default root
