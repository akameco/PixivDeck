// @flow
import styled from 'styled-components'

const StyledDrawer = styled.div`
	width: ${props => props.x}px;
	right: ${props => -props.x}px;
	transform: ${props => (props.open ? `translateX(-${props.x}px)` : 'translateX(0)')};
	z-index: 900;
	position: absolute;
	top: 0;
	bottom: 0;
	transition: transform 0.2s ease-out;
	-webkit-transition: -webkit-transform 0.2s ease-out;
	will-change: transform;
	overflow-y: auto;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
	background-color: #fff;
`

export default StyledDrawer
