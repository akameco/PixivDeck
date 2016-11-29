// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import unionBy from 'lodash.unionby';
import type {Dispatch, Illust, ColumnType} from '../../types';
import {fetchColumn, closeColumn} from '../../actions';
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
	timer: number;
	state: State = {illusts: []};

	componentDidMount() {
		this.init();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	async init(): Promise<void> {
		const column = this.props.column;
		const res = await this.props.dispatch(fetchColumn(column));
		this.setState({illusts: res});
		const ms = 1000 * 60 * 5;
		this.timer = setInterval(async () => {
			await this.tick();
		}, ms);
	}

	async tick() {
		const column = this.props.column;
		if (column.query.opts) {
			delete column.query.opts.max_bookmark_id;
			column.query.opts.offset = 0;
		}
		const res = await this.props.dispatch(fetchColumn(column), false);
		const unionByArray = unionBy(res, this.state.illusts, 'id');
		this.setState({
			illusts: unionByArray,
		});
	}

	handleClose = () => {
		this.props.dispatch(closeColumn(this.props.column.id));
	}

	handleOnNextPage: () => Promise<void> = async () => {
		const illusts = await this.props.dispatch(fetchColumn(this.props.column));
		const unionByArray = unionBy(this.state.illusts, illusts, 'id');
		this.setState({
			illusts: unionByArray,
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
