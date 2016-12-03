// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import type {Illust} from '../../types'
import Icon from '../icon/'
import styles from './box-image.css'

type Props = {
	illust: Illust,
	onClick: () => void
};

type State = {
	isVisible: bool,
	isLoaded: bool
};

export default class BoxImage extends Component {
	props: Props;
	state: State;
	target: Component<*, *, *>;
	io: Object;

	constructor(props: Props) {
		super(props)
		this.state = {
			isVisible: false,
			isLoaded: false,
		}
	}

	componentDidMount() {
		this.tick()
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		if (this.state.isLoaded !== nextState.isLoaded) {
			return true
		}
		if (this.state.isVisible !== nextState.isVisible) {
			return true
		}
		return false
	}

	componentWillUnmount() {
		this.io.unobserve(findDOMNode(this.target))
	}

	tick() {
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
					<Icon type="manga"/>
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
