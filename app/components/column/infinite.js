// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import css from 'react-css-modules'
import styles from './infinite.css'

type Props = {
	rootMargin?: string,
	onIntersect: () => void,
	children?: any,
	style?: Object
};

@css(styles)
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

	handleRefs = (c: Component<*, *, *>) => {
		this.sentinel = c
	}

	handleRootRefs = (c: Component<*, *, *>) => {
		this.root = c
	}

	render() {
		return (
			<div
				ref={this.handleRootRefs}
				style={this.props.style}
				styleName="base"
				>
				{this.props.children}
				<div ref={this.handleRefs} style={{height: 100}}/>
			</div>
		)
	}
}
