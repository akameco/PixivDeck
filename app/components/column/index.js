// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Work, Works, ColumnType} from '../../types';
import {nextPage, closeColumn, reloadColumn} from '../../actions';
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

function selectWorks(nums: Array<number>, works: Works) {
	return nums.map(i => works[i]);
}

function filterWorks(works: Array<Work>, filters: Array<(work: Work)=> bool>) {
	return works.filter(work => {
		return filters.every(f => f(work));
	});
}

const r18Filter = (work: Work) => work.ageLimit !== 'r18';
const tagFilter = (tags: Array<string>) => (work: Work) => work.tags.every(tag => tags.every(t => t !== tag));

function mapStateToProps(state: State, ownProps: Props) {
	const {entities, filter, history} = state;
	const {works} = entities;
	const columnWorks = ownProps.column.query.type === 'history' ? history : ownProps.column.works;
	const selectedWorks = selectWorks(columnWorks, works);
	const filters = [tagFilter(filter.tags)];
	if (!filter.r18) {
		filters.push(r18Filter);
	}
	const list = filterWorks(selectedWorks, filters);

	return {
		works: list
	};
}

export default connect(mapStateToProps)(SmartColumn);
