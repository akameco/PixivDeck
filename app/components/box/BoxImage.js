// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import type {Illust} from '../../types/illust'
import Icon from '../common/Icon'
import styles from './BoxImage.css'

type Props = {
	illust: Illust,
	onClick: () => void
}

type State = {
	isVisible: bool,
	isLoaded: bool
}

export default class BoxImage extends React.PureComponent {
	props: Props;
	target: Component<*, *, *>;
	io: Object;
	state: State = {
		isVisible: false,
		isLoaded: false,
	};

	componentDidMount() {
		this.init()
	}

	componentWillUnmount() {
		this.io.unobserve(findDOMNode(this.target))
	}

	init() {
		const target = this.target
		this.io = new IntersectionObserver(entries => { // eslint-disable-line no-undef
			const intersectionRatio = entries[0].intersectionRatio
			if (intersectionRatio <= 0) {
				this.setState({isVisible: false})
			}
			this.update()
		}, {
			rootMargin: '500px',
		})
		this.io.observe(findDOMNode(target))
	}

	update() {
		this.setState({isVisible: true})

		const img = new Image()
		img.onload = () => {
			this.setState({isLoaded: true})
		}
		img.src = this.props.illust.imageUrls.medium
	}

	handleRefs = (c: Component<*, *, *>) => {
		this.target = c
	}

	render() {
		const {imageUrls, pageCount} = this.props.illust
		const {isVisible, isLoaded} = this.state
		return (
			<div
				ref={this.handleRefs}
				className={styles.base}
				>
				{isVisible && isLoaded && pageCount > 1 &&
					<Icon type="manga" color="#fff"/>
				}
				{isVisible && isLoaded ?
					<img
						className={styles.loaded}
						src={imageUrls.large}
						onClick={this.props.onClick}
						/> : <img height={200}/>
				}
			</div>
		)
	}
}
