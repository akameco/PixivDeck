// @flow
import {connect} from 'react-redux'
import type {Dispatch} from '../../types'
import {addBookmark} from '../../actions'
import BookmarkButton from './BookmarkButton'

type ownProps = {
	id: number;
};

const mapDispatchToProps = (dispatch: Dispatch, {id}: ownProps) => ({
	onClick() {
		dispatch(addBookmark(id, true))
	},
})

export default connect(undefined, mapDispatchToProps)(BookmarkButton)
