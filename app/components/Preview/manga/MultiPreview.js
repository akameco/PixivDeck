// @flow
import React from 'react'
import styled from 'styled-components'
import type { MetaPages } from 'types/illust'
import CloseButton from 'components/common/CloseButton'

type Props = {
  pages: MetaPages,
  onClose: () => void,
}

export default function MultiPreview(props: Props) {
  const { pages, onClose } = props
  const imgs = pages.map(page =>
    <Item key={page.imageUrls.medium}>
      <Img src={page.imageUrls.large} />
    </Item>
  )
  return (
    <Wrapper onClick={onClose}>
      <CloseButton onClick={onClose} style={{ position: 'fixed' }} />
      {imgs}
    </Wrapper>
  )
}

const Item = styled.div`
	display: block;
`

const Img = styled.img`
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	margin: auto;
	user-select: none;
	cursor: zoom-out;
`

const Wrapper = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	top: 0;
	left: 0;
	background: rgba(24, 24, 24, 0.97);
	cursor: pointer;
	text-align: center;
	flex-direction: column;
	overflow-y: scroll;
	z-index: 999;
`
