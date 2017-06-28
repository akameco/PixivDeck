// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from 'components/common/Icon'

const StyledImg = styled.div`
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

type Props = {
  src: string,
  isManga?: boolean,
  onClick: () => void,
}

export default function BoxImage({ src, isManga = false, onClick }: Props) {
  return (
    <StyledImg>
      {isManga && <Icon type="manga" color="#fff" />}
      <img src={src} onClick={onClick} />
    </StyledImg>
  )
}
