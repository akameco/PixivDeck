// @flow
import { connect, type Connector } from 'react-redux'
import { createSelector } from 'reselect'
import type { Dispatch } from 'types'
import BookmarkButton, { type Props } from './BookmarkButton'
import { addBookmarkRequest, deleteBookmarkRequest } from './actions'
import { makeIsBookmarked } from './selectors'

const mapStateToProps = createSelector(
  makeIsBookmarked(),
  isBookmarked => ({
    isBookmarked,
  })
)

const mapDispatchToProps = (dispatch: Dispatch, { id }) => ({
  addBookmark() {
    dispatch(addBookmarkRequest(id, 'public'))
  },
  deleteBookmark() {
    dispatch(deleteBookmarkRequest(id))
  },
})

type OP = {
  id: number,
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(BookmarkButton)
