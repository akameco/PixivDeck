// @flow
import React, {Component} from 'react';
import {SortablePane, Pane} from 'react-sortable-pane';
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

	handleOnResize = () => null;

	render() {
		const columns = this.props.columns.map(column => (
			<Pane key={column.id} width={300} id={column.id} height="100%">
				<Column column={column}/>
			</Pane>
		));

		return (
			<div styleName="content">
				<SortablePane
					onResize={this.handleOnResize}
					>
						{columns}
				</SortablePane>
			</div>
		);
	}
}
