// @flow
import styled, { keyframes } from 'styled-components'

const loading = keyframes`
	0%,
	40%,
	100% {
		transform: scaleY(0.4);
	}

	20% {
		transform: scaleY(1);
	}
`

const Rect = styled.div`
	background-color: #333;
	height: 100%;
	width: 6px;
	display: inline-block;
	margin: 1px;
	animation: ${loading} 1.2s infinite ease-in-out;
	animation-delay: ${props => props.delay}s;
`

export default Rect
