// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import type {Illust} from '../../types'
import Box from '../box'
import {CloseButton} from '../button'
import Loading from '../common/Loading'
import Infinite from '../common/Infinite'
import styles from './list.css'

type Props = {
	illusts: Array<Illust>,
	title: string,
	onNextPage: () => void,
	onReload: () => void,
	onClose: () => void
};

export default class List extends Component {
	props: Props;
	target: Component<*, *, *>

	shouldComponentUpdate(nextProps: Props) {
		if (this.props.illusts.length !== nextProps.illusts.length) {
			return true
		}
		return false
	}

	handleTopClick = (e: Event) => {
		e.preventDefault()
		const node: HTMLElement = findDOMNode(this.target)
		if (node) {
			node.scrollTop = 0
		}
		this.props.onReload()
	};

	handleClose = () => {
		this.props.onClose()
	}

	// ignore event prop to react-sortable-pane
	handleMove = (e: Event) => {
		e.stopPropagation()
	}

	hanadleRef = (c: Component<*, *, *>) => {
		this.target = c
	}

	handleOnIntersect = () => {
		this.props.onNextPage()
	}

	render() {
		const List = this.props.illusts.map(illust => {
			return <Box key={illust.id} illust={illust}/>
		})

		return (
			<section className={styles.wrap}>
				<header className={styles.header}>
					<a className={styles.title} onClick={this.handleTopClick}>
						{this.props.title}
					</a>
					<CloseButton onClick={this.handleClose}/>
				</header>
				{this.props.illusts.length > 0 ?
					<div
						className={styles.content}
						onMouseDown={this.handleMove}
						onTouchStart={this.handleMove}
						>
						<Infinite
							ref={this.hanadleRef}
							onIntersect={this.handleOnIntersect}
							>
							{List}
						</Infinite>
					</div> :
					<div className={styles.loading}>
						<Loading wrapStyle={{background: '#121212'}}/>
					</div>
				}
			</section>
		)
	}
}
