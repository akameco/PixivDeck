// @flor
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {ColumnType, WorkType, UsersType} from '../actions/type';
import List from './list';
import styles from './column.css';

type Props = {
	id: number,
	column: ColumnType,
	works: Array<WorkType>,
	users: UsersType,
	onClickTag: (tag: string) => void,
	onNextPage: (id: number) => void,
	onClickWork: (id: number) => void,
	onClose: () => void
}

class Column extends Component {
	props: Props;

	handleOnNextPage = () => {
		this.props.onNextPage(this.props.id);
	};

	handleOnClickWork = (id :number) => {
		this.props.onClickWork(id);
	};

	handleClose = () => {
		this.props.onClose(this.props.column.id);
	}

	shouldComponentUpdate(nextProps) {
		return this.props.works.length !== nextProps.works.length;
	}

	render() {
		const {users, works, column} = this.props;
		return (
			<div styleName="base">
				{works.length > 0 &&
					<List
						title={column.title}
						works={works}
						users={users}
						onClose={this.handleClose}
						onClick={this.handleOnClickWork}
						onClickTag={this.props.onClickTag}
						onNextPage={this.handleOnNextPage}
						/>
					}
			</div>
		);
	}
}

export default cssModules(Column, styles);
