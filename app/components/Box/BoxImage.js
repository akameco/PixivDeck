// @flow
import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
import {findDOMNode} from 'react-dom'
import type {Illust} from 'types/illust'
import Icon from 'components/common/Icon'

type Props = {
	illust: Illust,
	onClick: () => void
}

type State = {
	isVisible: bool,
	isLoaded: bool
}

const BoxImageWrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 20px;
	text-align: center;
	cursor: zoom-in;
	overflow: hidden;
	border-radius: 3px;

	img {
		max-width: 100%;
		max-height: 100%;
		min-height: 100px;
		margin: -10px;
		overflow: hidden;
	}

	svg {
		position: absolute;
		width: 25px;
		height: 25px;
		padding: 2px;
		fill: white;
		background-color: rgba(180, 180, 180, 0.5);
		border-radius: 4px;
		margin-top: 5px;
		margin-left: 5px;
		z-index: 100;
	}
`

const fadeIn = keyframes`
	0% {
		filter: blur(10px);
		margin: -10px;
		opacity: 0;
	}

	100% {
		filter: blur(0);
		margin: 0;
		opacity: 1;
	}
`

const LoadedImg = styled.img`
	animation: ${fadeIn} 0.3s both;
`

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

	onHandleRefs = (c: Component<*, *, *>) => {
		this.target = c
	}

	render() {
		const {imageUrls, pageCount} = this.props.illust
		const {isVisible, isLoaded} = this.state
		return (
			<BoxImageWrapper innerRef={this.onHandleRefs}>
				{isVisible && isLoaded && pageCount > 1 &&
					<Icon type="manga" color="#fff"/>
				}
				{isVisible && isLoaded ?
					<LoadedImg
						src={imageUrls.large}
						onClick={this.props.onClick}
						/> : <img height={200}/>
				}
			</BoxImageWrapper>
		)
	}
}
