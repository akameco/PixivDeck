// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Work, Works, ColumnType} from '../../types';
import {nextPage, closeColumn, reloadColumn} from '../../actions/column';
import Column from './column';

type Props = {
	works: Array<Work>,
	column: ColumnType,
	dispatch: Dispatch
}

class SmartColumn extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		if (this.props.works.length !== nextProps.works.length) {
			return true;
		}
		return false;
	}

	handleClose = () => {
		this.props.dispatch(closeColumn(this.props.column.id));
	}

	handleOnNextPage = () => {
		this.props.dispatch(nextPage(this.props.column.id));
	}

	handleTopClick = (id: number) => {
		this.props.dispatch(reloadColumn(id));
	}

	render() {
		const {column, works} = this.props;
		return (
			<Column
				works={works}
				column={column}
				onClickTop={this.handleTopClick}
				onClose={this.handleClose}
				onNextPage={this.handleOnNextPage}
				/>
		);
	}
}

function filter(nums: Array<number>, works: Works, tags: Array<string>) {
	return nums
		.map(i => works[i])
		.filter(work => work.tags.every(tag => tags.every(t => t !== tag)));
}

function mapStateToProps(state: State, ownProps: Props) {
	const {entities, manage} = state;
	const {works} = entities;
	const {column} = ownProps;
	const workList = column.works ? filter(column.works, works, manage.filter.tags) : [];

	return {
		works: workList
	};
}

export default connect(mapStateToProps)(SmartColumn);
