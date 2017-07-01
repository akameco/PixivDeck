// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React$Element<*>,
}

const Body = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 50px);
`

export default function Column({ children }: Props) {
  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  return (
    <Body onMouseDown={handleMove} onTouchStart={handleMove}>
      {children}
    </Body>
  )
}
