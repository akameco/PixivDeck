// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Illust, User} from '../../types/';
import {
	addColumn,
	openImageView,
	openMangaPreview,
	openDrawer,
	currentIllust
} from '../../actions';
import Box from './box';

type Props = {
	illust: Illust,
	user: User,
	dispatch: Dispatch
};

class SmartBox extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return this.props.illust.id !== nextProps.illust.id;
	}

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag}, tag));
	}

	handleClickUser = () => {
		const {user} = this.props;
		this.props.dispatch(openDrawer());
		// this.props.dispatch(addColumn({type: 'userIllusts', id: user.id}, `${user.name}(${user.account})`));
	}

	handleClick = () => {
		const {id, pageCount} = this.props.illust;
		this.props.dispatch(currentIllust(id));
		if (pageCount > 1) {
			this.props.dispatch(openMangaPreview());
		} else {
			this.props.dispatch(openImageView());
		}
	}

	render() {
		return (
			<Box
				user={this.props.user}
				illust={this.props.illust}
				onClick={this.handleClick}
				onClickUser={this.handleClickUser}
				onClickTag={this.handleTagClick}
				/>
		);
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const user = state.entities.users[ownProps.illust.user];
	return {
		user
	};
}

export default connect(mapStateToProps)(SmartBox);
