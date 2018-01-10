// @flow
import * as React from 'react'
import { union } from 'lodash'
import styled from 'styled-components'
import Tag from '../Tag'

const FooterWrapper = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  font-size: 0.8rem;
`

type Props = {
  onClickTag: (tag: string) => void,
  tags: Array<string>,
}

export default function BoxFooter(props: Props) {
  const Tags = union(props.tags).map(item => (
    <Tag key={item} name={item} onClick={props.onClickTag} />
  ))
  return <FooterWrapper>{Tags}</FooterWrapper>
}
