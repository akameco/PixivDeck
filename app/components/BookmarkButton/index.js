// @flow
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {State, Dispatch} from 'types'
import {addBookmark} from 'actions'
import {getIllust} from 'reducers'
import BookmarkButton from './BookmarkButton'
import type {Props} from './BookmarkButton'

type OwnProps = {
	id: number
}

const mapStateToProps = (state: State, {id}) => {
	const {isBookmarked} = getIllust(state, id)
	return {
		isBookmarked,
	}
}

const mapDispatchToProps = (dispatch: Dispatch, {id}) => ({
	onClick() {
		dispatch(addBookmark(id, true))
	},
})

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps)

export default connector(BookmarkButton)
