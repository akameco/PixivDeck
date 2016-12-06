// @flow
import React from 'react'
import {SortablePane, Pane} from 'react-sortable-pane'
import type {ColumnType} from '../../types/column'
import Column from '../column'
import styles from './Columns.css'

type Props = {
	columns: Array<ColumnType>
};

const Columns = ({columns}: Props) => {
	const handleOnResize = () => null
	const panes = columns.map(column => (
		<Pane key={column.id} width={300} id={column.id} height="100%">
			<Column column={column}/>
		</Pane>
	))
	return (
		<div className={styles.content}>
			<SortablePane
				onResize={handleOnResize}
				>
				{panes}
			</SortablePane>
		</div>
	)
}

export default Columns
