import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import {connect} from 'react-redux';
import type {WorksType, ColumnType, UserType} from '../actions/type';
import {
	addColumn,
	nextPage,
	closeColumn
} from '../../actions/column';
import {openImageView, currentWork} from '../../actions/manage';
import ColumnBase from './column';

type Props = {
	works: WorksType,
	column: ColumnType,
	users: UserType,
	dispatch: Dispatch;
}

class Column extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		if (this.props.works.length !== nextProps.works.length) {
			return true;
		}
		return false;
	}

	handleOnClickWork = (id: number) => {
		this.props.dispatch(currentWork(id));
		this.props.dispatch(openImageView());
	}

	handleCloseColumn = (id: number) => {
		this.props.dispatch(closeColumn(id));
	}

	handleOnNextPage = (id: number) => {
		this.props.dispatch(nextPage(id));
	}

	handleTagClick = (tag: string) => {
		this.props.dispatch(addColumn({type: 'search', q: tag, opts: {page: 1}}, tag));
	}

	render() {
		const {column, users, works} = this.props;
		return (
			<ColumnBase
				id={column.id}
				column={column}
				users={users}
				works={works}
				onClose={this.handleCloseColumn}
				onNextPage={this.handleOnNextPage}
				onClickTag={this.handleTagClick}
				onClickWork={this.handleOnClickWork}
				/>
		);
	}
}

function filter(nums: Array<number>, works: WorksType, tags: Array<string>) {
	return nums
		.map(i => works[i])
		.filter(work => work.tags.every(tag => tags.every(t => t !== tag)));
}

function mapStateToProps(state: State, ownProps) {
	const {entities, manage} = state;
	const {works, users} = entities;
	const {column} = ownProps;
	const workList = column.works ? filter(column.works, works, manage.filter.tags) : [];

	return {
		works: workList,
		users
	};
}

export default connect(mapStateToProps)(Column);
