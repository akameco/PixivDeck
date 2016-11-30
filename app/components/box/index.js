// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import type {Dispatch, State, Illust, User} from '../../types/'
import {
	addColumn,
	openImageView,
	openMangaPreview,
	currentIllust,
	openUserDrawer,
} from '../../actions'
import Box from './box'

type Props = {
	illust: Illust;
	user: User;
	isIllustOnly: bool;
	dispatch: Dispatch;
};

class SmartBox extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return (
			this.props.illust.id !== nextProps.illust.id ||
			nextProps.isIllustOnly !== this.props.isIllustOnly
		)
	}

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
				onClickUser={this.handleClickUser}
				onClickTag={this.handleTagClick}
				/>
		)
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const user = state.entities.users[ownProps.illust.user]
	const {isIllustOnly} = state.config
	return {
		user,
		isIllustOnly,
	}
}

export default connect(mapStateToProps)(SmartBox)
