// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Work, User} from '../../types/';
import {addColumn} from '../../actions/column';
import {openImageView, openMangaPreview, currentWork} from '../../actions/manage';
import Box from './box';

type Props = {
	work: Work,
	user: User,
	dispatch: Dispatch
};

class SmartBox extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return this.props.work.id !== nextProps.work.id;
	}

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
	}

	handleClickUser = () => {
		const {user} = this.props;
		this.props.dispatch(addColumn({type: 'userWorks', id: user.id, opts: {page: 1}}, `${user.name}(${user.account})`));
	}

	handleClick = () => {
		const {id, pageCount} = this.props.work;
		this.props.dispatch(currentWork(id));
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
				work={this.props.work}
				onClick={this.handleClick}
				onClickUser={this.handleClickUser}
				onClickTag={this.handleTagClick}
				/>
		);
	}
}

function mapStateToProps(state: State, ownProps: Props) {
	const user = state.entities.users[ownProps.work.user];
	return {
		user
	};
}

export default connect(mapStateToProps)(SmartBox);
