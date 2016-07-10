// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

type Props = {
	rootMargin?: string,
	onIntersect: () => void,
	children?: any
};

export default class Infinite extends Component {
	props: Props;
	sentinel: Component<*, *, *>;
	root: Component<*, *, *>;
	io: Object;

	componentDidMount() {
		const sentinel = this.sentinel;
		this.io = new IntersectionObserver(entries => { // eslint-disable-line no-undef
			if (entries[0].intersectionRatio <= 0) {
				return;
			}
			setImmediate(() => {
				this.handleOnIntersect();
			});
		}, {
			root: this.root,
			rootMargin: this.props.rootMargin || '1000%'
		});
		this.io.observe(findDOMNode(sentinel));
	}

	handleOnIntersect() {
		this.props.onIntersect();
	}

	handleRefs = (c: Component<*, *, *>) => {
		this.sentinel = c;
	};

	handleRootRefs = (c: Component<*, *, *>) => {
		this.root = c;
	};

	render() {
		return (
			<div ref={this.handleRootRefs}>
				{this.props.children}
				<div ref={this.handleRefs} style={{height: 100}}></div>
			</div>
		);
	}
}
