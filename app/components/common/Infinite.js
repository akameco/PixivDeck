// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import styles from './Infinite.css'

type Props = {
	rootMargin?: string,
	onIntersect: () => void,
	children?: any,
	style?: Object
};

export default class Infinite extends Component {
	props: Props;
	sentinel: Component<*, *, *>;
	root: Component<*, *, *>;
	io: Object;

	componentDidMount() {
		const sentinel = this.sentinel
		this.io = new IntersectionObserver(entries => { // eslint-disable-line no-undef
			if (entries[0].intersectionRatio <= 0) {
				return
			}
			requestAnimationFrame(() => {
				this.handleOnIntersect()
			})
		}, {
			root: this.root,
			rootMargin: this.props.rootMargin || '1000px',
		})
		this.io.observe(findDOMNode(sentinel))
	}

	handleOnIntersect() {
		this.props.onIntersect()
	}

	render() {
		const {style, children} = this.props
		return (
			<div
				ref={c => { // eslint-disable-line react/jsx-no-bind
					this.root = c
				}}
				style={style}
				className={styles.base}
				>
				{children}
				<div
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this.sentinel = c
					}}
					style={{height: 100}}
					/>
			</div>
		)
	}
}
