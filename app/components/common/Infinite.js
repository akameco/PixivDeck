// @flow
import React, {Component} from 'react'
import styled from 'styled-components'
import {findDOMNode} from 'react-dom'
import * as colors from 'constants/colors'
import Loading from 'components/Loading'

type Props = {
	rootMargin?: string,
	onIntersect: () => void,
	children?: React$Element<any>,
	root?: any,
	targetRef?: (c: Component<*, *, *>) => void,
	style?: Object
}

export default class Infinite extends Component {
	props: Props;
	sentinel: Component<*, *, *>;
	io: Object;
	root: Component<*, *, *>

	static defaultProps = {
		rootMargin: '1000px',
	}

	componentDidMount() {
		const sentinel = this.sentinel
		const {root, rootMargin, onIntersect} = this.props
		const opts = root ? {rootMargin} : {rootMargin, root}
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
		const {style, children, targetRef} = this.props
		return (
			<Wrap style={style} innerRef={targetRef}>
				{children}
				<div
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this.sentinel = c
					}}
					>
					<Loading wrapStyle={{background: colors.background}}/>
				</div>
			</Wrap>
		)
	}
}

const Wrap = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100%;
`
