import * as React from 'react'
import { MetaPages } from 'types/illust'
import CloseButton from 'components/common/CloseButton'
import { Wrapper, Item, Img } from './styles'

interface Props {
  pages: MetaPages
  onClose: () => undefined
}
export default function MultiPreview({ pages, onClose }: Props) {
  const imgs = pages.map(page => (
    <Item key={page.imageUrls.medium}>
      <Img src={page.imageUrls.large} />
    </Item>
  ))
  return (
    <Wrapper onClick={onClose}>
      <CloseButton
        onClick={onClose}
        style={{
          position: 'fixed',
        }}
      />
      {imgs}
    </Wrapper>
  )
}
