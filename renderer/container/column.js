// @flor
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import type {ColumnType, WorkType, UsersType} from '../actions/type';
import List from '../components/list';
import styles from './column.css';

type Props = {
	id: number,
	column: ColumnType,
	works: Array<WorkType>,
	users: UsersType,
	onNextPage: (id: number) => void,
	onClickWork: (id: number) => void
}

class Column extends Component {
	props: Props;

	handleOnNextPage = () => {
		this.props.onNextPage(this.props.id);
	};

	handleOnClickWork = (id :number) => {
		this.props.onClickWork(id);
	};

	render() {
		const {users, works, column} = this.props;
		return (
			<div styleName="base">
				{works.length > 0 &&
					<List
						title={column.title}
						works={works}
						users={users}
						onClick={this.handleOnClickWork}
						onNextPage={this.handleOnNextPage}
						/>
					}
			</div>
		);
	}
}

export default cssModules(Column, styles);
