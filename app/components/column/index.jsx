// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import unionBy from 'lodash.unionby';
import type {Dispatch, Illust, ColumnType} from '../../types';
import {nextPage, closeColumn, fetchColumn} from '../../actions';
import Column from './column';

type Props = {
	column: ColumnType,
	dispatch: Dispatch
};

type State = {
	illusts: Array<Illust>
};

class SmartColumn extends Component {
	props: Props;
	state: State = {illusts: []};

	componentDidMount() {
		this.init();
	}

	async init(): Promise<void> {
		const column = this.props.column;
		const res = await this.props.dispatch(fetchColumn(column));
		this.setState({illusts: res});
	}

	handleClose = () => {
		this.props.dispatch(closeColumn(this.props.column.id));
	}

	handleOnNextPage: () => Promise<void> = async () => {
		const illusts = await this.props.dispatch(nextPage(this.props.column));
		const unionByArray = unionBy(this.state.illusts, illusts, 'id');
		this.setState({
			illusts: unionByArray
		});
	}

	render() {
		const {column} = this.props;
		const {illusts} = this.state;
		return (
			<Column
				illusts={illusts}
				column={column}
				onClose={this.handleClose}
				onNextPage={this.handleOnNextPage}
				/>
		);
	}
}

export default connect()(SmartColumn);
