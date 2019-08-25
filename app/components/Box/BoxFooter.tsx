import * as React from 'react'
import { union } from 'lodash'
import styled from 'styled-components'
import Tag from '../Tag'

const FooterWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-size: 0.8rem;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`
interface Props {
  onClickTag: (tag: string) => undefined
  tags: string[]
}
export default function BoxFooter(props: Props) {
  const Tags = union(props.tags).map(item => (
    <Tag key={item} name={item} onClick={props.onClickTag} />
  ))
  return <FooterWrapper>{Tags}</FooterWrapper>
}
