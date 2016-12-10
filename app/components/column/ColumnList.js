// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import type {Illust} from '../../types/illust'
import Loading from '../common/Loading'
import ColumnHeader from './ColumnHeader'
import ColumnContent from './ColumnContent'
import styles from './ColumnList.css'

type Props = {
	id: number,
	illusts: Array<Illust>,
	title: string,
	onNextPage: () => void,
	onReload: () => void,
	onClose: () => void
};

type State = {
	toTop: bool;
};

export default class List extends Component {
	props: Props;
	target: Component<*, *, *>
	root: typeof ColumnContent
	state: State = {
		toTop: false,
	}

	handleTopClick = (e: Event) => {
		e.preventDefault()
		const node: HTMLElement = findDOMNode(this.root)
		if (node) {
			node.scrollTop = 0
		}
		this.props.onReload()
	}

	render() {
		const {
			illusts,
			title,
			onClose,
			onNextPage,
			id,
		} = this.props

		return (
			<section className={styles.wrap}>
				<ColumnHeader
					id={id}
					title={title}
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
			</section>
		)
	}
}

const ColumnLoading = () => (
	<div className={styles.loading}>
		<Loading wrapStyle={{background: '#121212'}}/>
	</div>
)
