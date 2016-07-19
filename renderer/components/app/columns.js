// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {ColumnType} from '../../types';
import Column from '../column';
import styles from './columns.css';

type Props = {
	columns: Array<ColumnType>
};

@css(styles)
export default class Columns extends Component {
	props: Props;

	render() {
		const columns = this.props.columns.map(column => (
			<Column key={column.id} column={column}/>
		));

		return (
			<div styleName="content">
				{columns}
			</div>
		);
	}
}
