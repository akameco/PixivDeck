// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React$Element<any>,
}

const Card = ({ children }: Props) => (
  <Wrap>
    {children}
  </Wrap>
)

const Wrap = styled.div`
	width: 360px;
	background: white;
	margin: 10px;
	padding: 10px;
`

export default Card
