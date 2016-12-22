// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import scrollTop from 'residual-scroll-top'
import type {Illust} from '../../types/illust'
import type {ColumnType} from '../../types/column'
import Loading from '../common/Loading'
import ColumnHeader from './ColumnHeader'
import ColumnContent from './ColumnContent'
import styles from './Column.css'

type Props = {
	illusts: Array<Illust>,
	column: ColumnType,
	onClose: () => void,
	onReload: () => void,
	onNextPage: () => void
};

type State = {
	toTop: bool;
};

export default class Column extends Component<void, Props, State> {
	target: Component<*, *, *>
	root: typeof ColumnContent

	state = {toTop: false}

	handleTopClick = (e: Event) => {
		e.preventDefault()
		const node: HTMLElement = findDOMNode(this.root)
		if (node.scrollTop === 0) {
			return
		}
		if (node) {
			scrollTop(node, () => {
				this.props.onReload()
			})
		}
	}

	render() {
		const {
			column,
			illusts,
			onClose,
			onNextPage,
		} = this.props
		return (
			<div className={styles.wrap}>
				<ColumnHeader
					column={column}
					onClose={onClose}
					onTopClick={this.handleTopClick}
					/>
				{illusts.length > 0 ?
					<ColumnContent
						root={c => { // eslint-disable-line react/jsx-no-bind
							this.target = c
						}}
						targetRef={c => { // eslint-disable-line react/jsx-no-bind
							this.root = c
						}}
						onIntersect={onNextPage}
						illusts={illusts}
						/> : <ColumnLoading/>
				}
			</div>
		)
	}
}

const ColumnLoading = () => (
	<div className={styles.loading}>
		<Loading wrapStyle={{background: '#121212'}}/>
	</div>
)
