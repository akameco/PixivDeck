// @flow
import React, {Component} from 'react'
import type {Illust, ColumnType} from '../../types'
import List from './list'
import styles from './column.css'

type Props = {
	illusts: Array<Illust>,
	column: ColumnType,
	onClose: () => void,
	onReload: () => void,
	onNextPage: () => void
};

export default class Column extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		if (this.props.illusts.length !== nextProps.illusts.length) {
			return true
		}
		return false
	}

	render() {
		const {column, ...othres} = this.props
		return (
			<div className={styles.base}>
				<List
					id={column.id}
					title={column.title}
					{...othres}
					/>
			</div>
		)
	}
}
