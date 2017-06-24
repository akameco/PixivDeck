// @flow
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
	margin: 0;
	cursor: pointer;
	list-style: none;
	font-size: 0.8rem;
	display: block;
	color: #666;
	overflow: hidden;
	padding: 8px 10px 8px 5px;

	&:hover {
		color: white;
		background-color: #3f9f94;
	}
`

type Props = {
  text: string | React$Element<*>,
  onClick: () => void,
}

const Item = ({ text, onClick }: Props) =>
  <Wrap onClick={onClick}>
    {text}
  </Wrap>

export default Item
