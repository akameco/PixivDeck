// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../types/'
import type {Illust} from '../../types/illust'
import type {User} from '../../types/user'
import {getUser} from '../../reducers'
import {
	addColumn,
	openImageView,
	openMangaPreview,
	currentIllust,
	openUserDrawer,
	addBookmark,
} from '../../actions'
import Box from './Box'

type Props = {
	illust: Illust,
	user: User,
	isIllustOnly: bool,
	dispatch: Dispatch,
	addBookmark: (id: number, isPublic: bool) => void,
};

class SmartBox extends Component {
	props: Props;

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn('searchIllust', {word: tag}, tag, 1000 * 60 * 5))
	}

	handleClickUser = () => {
		const {user} = this.props
		this.props.dispatch(openUserDrawer(user.id))
	}

	handleClick = () => {
		const {id, pageCount} = this.props.illust
		this.props.dispatch(currentIllust(id))
		if (pageCount > 1) {
			this.props.dispatch(openMangaPreview())
		} else {
			this.props.dispatch(openImageView())
		}
	}

	render() {
		return (
			<Box
				user={this.props.user}
				illust={this.props.illust}
				isIllustOnly={this.props.isIllustOnly}
				onClick={this.handleClick}
				addBookmark={this.props.addBookmark}
				onClickUser={this.handleClickUser}
				onClickTag={this.handleTagClick}
				/>
		)
	}
}

const mapStateToProps = (state: State, {illust}: Props) => {
	const user = getUser(state, illust.user)
	const {config: {isIllustOnly}} = state
	return {
		user,
		isIllustOnly,
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		dispatch,
		addBookmark: (id: number, isPublic: bool) => dispatch(addBookmark(id, isPublic)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartBox)
