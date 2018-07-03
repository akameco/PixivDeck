// @flow
import * as React from 'react'
import styled from 'styled-components'
import Loading from 'components/ColumnLoading'

type Props = {
  isLoading: boolean,
  children?: React.Node,
}

const Body = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 50px);
  width: 280px;
`

export default function ColumnBody({ isLoading, children }: Props) {
  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  return (
    <Body onMouseDown={handleMove} onTouchStart={handleMove}>
      {isLoading ? <Loading /> : children}
    </Body>
  )
}
