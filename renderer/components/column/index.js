// @flow
import React, {Component} from 'react';
import type {Dispatch, State} from 'redux';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import type {WorkType, WorksType, ColumnType} from '../actions/type';
import {nextPage, closeColumn} from '../../actions/column';
import List from './list';
import styles from './column.css';

type Props = {
	works: Array<WorkType>,
	column: ColumnType,
	dispatch: Dispatch;
}

@CSSModules(styles)
class Column extends Component {
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

	render() {
		const {column, works} = this.props;
		return (
			<div styleName="base">
				<List
					title={column.title}
					works={works}
					onClose={this.handleClose}
					onNextPage={this.handleOnNextPage}
					/>
			</div>
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
	const {works} = entities;
	const {column} = ownProps;
	const workList = column.works ? filter(column.works, works, manage.filter.tags) : [];

	return {
		works: workList
	};
}

export default connect(mapStateToProps)(Column);
