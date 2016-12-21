// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
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

const easeOutExpo = x =>
	x === 1 ? 1 : 1 - Math.pow(2, -10 * x)

const position = (start, end, elapsed, duration) => {
	if (elapsed > duration) {
		return end
	}
	return start + ((end - start) * easeOutExpo(elapsed / duration))
}

export default class Column extends Component {
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
			const clock = Date.now()
			const duration = 700

			let opacity = 1
			const start = node.scrollTop

			const step = () => {
				const elapsed = Date.now() - clock
				node.scrollTop = position(start, 0, elapsed, duration)

				if (elapsed < duration) {
					if (duration - elapsed < 150) {
						opacity += 0.09
					} else if (opacity > 0) {
						opacity -= 0.06
					}
					node.style.opacity = `${opacity}`

					requestAnimationFrame(step)
				} else {
					node.style.opacity = '1.0'
					this.props.onReload()
				}
			}
			step()
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
