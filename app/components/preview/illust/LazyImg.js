// @flow
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import styled, {keyframes} from 'styled-components'
import CloseButton from 'components/common/CloseButton'
import Wrapper from './LazyImgWrapper'

type Size = {
	width: number | 'auto',
	height: number | 'auto'
}

function calcSize(width: number, height: number): Size {
	const {innerWidth, innerHeight} = window
	if (height > innerHeight && width > innerWidth) {
		return (width * innerHeight < height * innerWidth) ?
			{width: 'auto', height: innerHeight} :
		{
			width: innerWidth,
			height: 'auto',
		}
	}
	if (height > innerHeight) {
		return {width: 'auto', height: innerHeight}
	}
	if (width > innerWidth) {
		return {width: innerWidth, height: 'auto'}
	}

	return {width, height}
}

type Props = {
	from: string,
	to: string,
	width: number,
	height: number,
	isLoaded: bool,
	onLoad: () => void,
	onClose: () => void
}

type State = {
	isClicked: bool,
	fromMarginTop: number,
	toMarginTop: number
}

export default class LazyImg extends Component {
	props: Props;
	to: Component<*, *, *>
	from: Component<*, *, *>
	state: State = {
		isClicked: false,
		fromMarginTop: 0,
		toMarginTop: 0,
	};

	componentDidMount() {
		const to = this.calcMarginTop(findDOMNode(this.to))
		const from = this.calcMarginTop(findDOMNode(this.from))
		this.setState({
			toMarginTop: to,
			fromMarginTop: from,
		})
	}

	componentWillUpdate(nextProps: Props, nextState: State) {
		const to = this.calcMarginTop(findDOMNode(this.to))
		const from = this.calcMarginTop(findDOMNode(this.from))
		if (
			this.props.isLoaded !== nextProps.isLoaded ||
			nextState.isClicked !== this.state.isClicked ||
			nextState.fromMarginTop !== from ||
			nextState.toMarginTop !== to
		) {
			this.setState({
				toMarginTop: to,
				fromMarginTop: from,
			})
		}
	}

	handleLoad = () => {
		const img = new Image()
		const {to, onLoad} = this.props
		img.onload = () => {
			onLoad()
		}
		img.src = to
	}

	calcMarginTop(node: HTMLElement): number {
		if (node) {
			const height = node && node.clientHeight
			if (window.innerHeight > height) {
				const top = (window.innerHeight - height) / 2
				return top
			}
		}
		return 0
	}

	handleClick = (event: SyntheticEvent) => { // eslint-disable-line no-undef
		event.stopPropagation()
		this.setState({isClicked: !this.state.isClicked})
	}

	render() {
		const {width, height, isLoaded, onClose} = this.props
		const {isClicked} = this.state
		const fromStyle = calcSize(width, height)

		if (isLoaded) {
			return (
				<Wrapper>
					<CloseButton
						style={{color: '#676767', top: '10px', right: '10px'}}
						iconStyle={{fill: 'white'}}
						onClick={onClose}
						/>
					<Img
						src={this.props.to}
						width={width}
						height={height}
						marginTop={this.state.toMarginTop}
						isClicked={isClicked}
						onClick={this.handleClick}
						ref={c => { // eslint-disable-line react/jsx-no-bind
							this.to = c
						}}
						/>
				</Wrapper>
			)
		}

		return (
			<Wrapper>
				<CloseButton onClick={onClose} iconStyle={{fill: 'white'}}/>
				<FromImg
					src={this.props.from}
					marginTop={this.state.fromMarginTop}
					style={fromStyle}
					onLoad={this.handleLoad}
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this.from = c
					}}
					/>
			</Wrapper>
		)
	}
}

const FromImg = styled.img`
	width: auto;
	height: auto;
	max-width: 100vw;
	max-height: 100vh;
	margin: auto;
	margin-top: ${props => props.marginTop}px;
	user-select: none;
	cursor: wait;
`

const fadeIn = keyframes`
	0% {
		filter: blur(1px);
	}

	100% {
		filter: none;
	}
`

const Img = styled.img`
	width: auto;
	height: auto;
	margin: auto;
	margin-top: ${props => props.marginTop}px;
	max-width: ${props => props.isClicked ? 'none' : '100vw'};
	max-height: ${props => props.isClicked ? 'none' : '100vh'};
	cursor: ${props => props.isClicked ? 'zoom-out' : 'zoom-in'};
	animation: ${fadeIn} 600ms forwards;
	user-select: none;
`
