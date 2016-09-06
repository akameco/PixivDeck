// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {Illust, ColumnType} from '../../types';
import List from './list';
import styles from './column.css';

type Props = {
	illusts: Array<Illust>,
	column: ColumnType,
	onClickTop: (id: number) => void,
	onClose: () => void,
	onNextPage: () => void
};

@css(styles)
export default class Column extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		if (this.props.illusts.length !== nextProps.illusts.length) {
			return true;
		}
		return false;
	}

	render() {
		const {column, illusts} = this.props;
		return (
			<div styleName="base">
				<List
					id={column.id}
					title={column.title}
					illusts={illusts}
					onReload={this.props.onClickTop}
					onClose={this.props.onClose}
					onNextPage={this.props.onNextPage}
					/>
			</div>
		);
	}
}
