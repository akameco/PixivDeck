// @flow
import {connect} from 'react-redux'
import type {State, Dispatch} from '../../types'
import type {Query, Endpoint} from '../../types/column'
import {addColumn} from '../../actions'
import Modal from './AddColumnModal'

const mapStateToProps = ({history}: State) => {
	return {
		history,
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	const hour = 1000 * 60 * 5
	const add = (endpoint: Endpoint, query: Query, title: string) =>
		dispatch(addColumn(endpoint, query, title, hour))
	return {
		onSelect: add,
		addBookmark() {
			add('userBookmarksIllust', {opts: {restrict: 'public'}}, '公開ブックマーク')
		},
		addBookmarkPrivate() {
			add('userBookmarksIllust', {opts: {restrict: 'private'}}, '非公開ブックマーク')
		},
		addFollow() {
			add('illustFollow', {opts: {restrict: 'public'}}, '新着 公開')
		},
		addFollowPrivate() {
			add('illustFollow', {opts: {restrict: 'private'}}, '新着 非公開')
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
