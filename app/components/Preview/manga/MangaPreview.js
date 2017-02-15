// @flow
import React from 'react'
import styled, {keyframes} from 'styled-components'

type Props = {
	img: string,
	onClose: () => void
}

type State = {
	isLoad: bool
}

export default class MangaPreview extends React.PureComponent {
	props: Props;
	state: State = {isLoad: false};

	handleClose = () => {
		this.props.onClose()
	}

	handleImgLoad = () => {
		this.setState({isLoad: true})
	}

	render() {
		return (
			<Wrapper onClick={this.handleClose}>
				<Img
					src={this.props.img}
					onLoad={this.handleImgLoad}
					loaded={this.state.isLoad}
					/>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	text-align: center;
	background: rgba(24, 24, 24, 0.95);
	z-index: 999;
	width: 100%;
	height: 100%;
`

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`

const Img = styled.img`
	width: auto;
	height: auto;
	max-width: 100vw;
	max-height: 100vh;
	margin: auto;
	user-select: none;
	opacity: 0;
	cursor: zoom-out;
	animation: ${props => props.loaded && `${fadeIn} 500ms both`};
`
