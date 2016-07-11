// @flor
import React, {Component} from 'react';
import type {State, Dispatch} from 'redux';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import type {ColumnType, WorkType, UsersType} from '../actions/type';
import {currentWork} from '../actions';
import {openImageView} from '../actions/manage';
import {nextPage} from '../actions/column';
import List from '../components/list';
import styles from './column.css';

type Props = {
	id: number,
	column: ColumnType,
	works: Array<WorkType>,
	users: UsersType,
	dispatch: Dispatch
}

class Column extends Component {
	props: Props;

	handleOnNextPage = () => {
		this.props.dispatch(nextPage(this.props.id));
	};

	handleOnClickWork = (id :number) => {
		this.props.dispatch(currentWork(id));
		this.props.dispatch(openImageView());
	};

	render() {
		const {users, works, column} = this.props;
		const arr = column.works && column.works.length > 0 ? column.works.map(i => works[i]) : [];

		return (
			<div styleName="base">
				{arr.length > 0 &&
					<List
						title={column.title}
						works={arr}
						users={users}
						onClick={this.handleOnClickWork}
						onNextPage={this.handleOnNextPage}
						/>
					}
			</div>
		);
	}
}

function mapStateToProps(state: State, ownProps: any) {
	const {entities, columns} = state;
	const {works, users} = entities;
	const column = columns[ownProps.id - 1];
	return {
		column,
		works,
		users
	};
}

export default connect(mapStateToProps)(cssModules(Column, styles));
