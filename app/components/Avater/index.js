// @flow
import styled from 'styled-components'
import React from 'react'

type Props = {
  size: number,
  src: string,
  style?: Object,
  className?: string,
  color?: string,
}

const StyledAvater = styled.img`
	user-select: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	color: ${props => props.color || '#fff'};
`

const Avater = (props: Props) => <StyledAvater {...props} />

export default Avater
