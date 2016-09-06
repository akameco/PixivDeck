// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {Dispatch, State, Illust, Illusts, ColumnType} from '../../types';
import {nextPage, closeColumn, reloadColumn} from '../../actions';
import Column from './column';

type Props = {
	illusts: Array<Illust>,
	column: ColumnType,
	dispatch: Dispatch
};

class SmartColumn extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		if (this.props.illusts.length !== nextProps.illusts.length) {
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
		const {column, illusts} = this.props;
		return (
			<Column
				illusts={illusts}
				column={column}
				onClickTop={this.handleTopClick}
				onClose={this.handleClose}
				onNextPage={this.handleOnNextPage}
				/>
		);
	}
}

function selectIllusts(nums: Array<number>, illusts: Illusts) {
	return nums.map(i => illusts[i]);
}

function filterIllusts(illusts: Array<Illust>, filters: Array<(illust: Illust)=> bool>) {
	return illusts.filter(illust => {
		return filters.every(f => f(illust));
	});
}

const tagFilter = (tags: Array<string>) => (illust: Illust) => illust.tags.every(tag => tags.every(t => t !== tag));

function mapStateToProps(state: State, ownProps: Props) {
	const {entities, filter, history} = state;
	const {illusts} = entities;
	const columnIllusts = ownProps.column.query.type === 'history' ? history : ownProps.column.illusts;
	const selectedIllusts = selectIllusts(columnIllusts, illusts);
	const filters = [tagFilter(filter.tags)];
	const list = filterIllusts(selectedIllusts, filters);

	return {
		illusts: list
	};
}

export default connect(mapStateToProps)(SmartColumn);
