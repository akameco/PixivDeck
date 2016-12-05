// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Loading from '../common/Loading'
import styles from './Infinite.css'

type Props = {
	rootMargin?: string,
	onIntersect: () => void,
	children?: any,
	root?: any,
	style?: Object
};

export default class Infinite extends Component {
	props: Props;
	sentinel: Component<*, *, *>;
	io: Object;

	componentDidMount() {
		const sentinel = this.sentinel
		const {root, rootMargin, onIntersect} = this.props
		const defaultOpts = {rootMargin: rootMargin || '1000px'}
		const opts = root ? defaultOpts : {...defaultOpts, root}
		this.io = new IntersectionObserver(entries => { // eslint-disable-line no-undef
			if (entries[0].intersectionRatio <= 0) {
				return
			}
			requestAnimationFrame(() => {
				onIntersect()
			})
		}, opts)
		this.io.observe(findDOMNode(sentinel))
	}

	render() {
		const {style, children} = this.props
		return (
			<div style={style} className={styles.wrap}>
				{children}
				<div
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this.sentinel = c
					}}
					>
					<Loading wrapStyle={{background: '#222426', display: 'flex'}}/>
				</div>
			</div>
		)
	}
}
