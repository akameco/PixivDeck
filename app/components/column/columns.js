// @flow
import React, {Component} from 'react'
import {SortablePane, Pane} from 'react-sortable-pane'
import type {ColumnType} from '../../types'
import Column from '../column'
import styles from './Columns.css'

type Props = {
	columns: Array<ColumnType>
};

export default class Columns extends Component {
	props: Props;

	handleOnResize = () => null;

	render() {
		const columns = this.props.columns.map(column => (
			<Pane key={column.id} width={300} id={column.id} height="100%">
				<Column column={column}/>
			</Pane>
		))

		return (
			<div className={styles.content}>
				<SortablePane
					onResize={this.handleOnResize}
					>
					{columns}
				</SortablePane>
			</div>
		)
	}
}
