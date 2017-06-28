// @flow
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
	0% {
		bottom: -150px;
	}

	100% {
		bottom: 10px;
	}
`

export const Wrap = styled.div`
  position: absolute;
  background-color: white;
  bottom: 10px;
  left: 50px;
  width: 150px;
  padding: 12px 0;
  animation: ${fadeIn} 400ms both;
`

export const H = styled.div`
  padding-top: 1px;
  border-bottom: 1px solid #ddd;
  margin: 5px 0;
  text-overflow: ellipsis;
`
