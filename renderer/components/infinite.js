// @flow
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

type Props = {
	rootMargin: ?string,
	children: any,
	onIntersect: () => void
};

export default class Infinite extends Component {
	props: Props;
	sentinel: Component;
	io: () => Object;

	componentDidMount() {
		const sentinel = this.sentinel;
		this.io = new IntersectionObserver(entries => {
			if (entries[0].intersectionRatio <= 0) {
				return;
			}
			this.props.onIntersect();
		}, {rootMargin: this.props.rootMargin || '300%'});
		this.io.observe(findDOMNode(sentinel));
	}

	handleRefs(c: Component) {
		this.sentinel = c;
	}

	render() {
		return (
			<div>
				{this.props.children}
				<div ref={c => this.handleRefs(c)} style={{height: 1}}></div>
			</div>
		);
	}
}
