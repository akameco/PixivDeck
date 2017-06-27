// @flow
import React from 'react'
import styled from 'styled-components'

const StyledPopover = styled.div`
  display: flex;
  overflow: auto;
  margin: 0;
  padding: 0 10px;
  max-height: ${p => (p.open ? '400px' : 0)};
  transition: ${p =>
    p.open
      ? 'max-height, 0.6s, 0ms, ease-out'
      : 'max-height, 0.4s, 0ms, ease-in'};
`

type Props = {
  children?: React$Element<*>,
  open: boolean,
}

const Popover = ({ open, children }: Props) => {
  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  return (
    <StyledPopover
      open={open}
      onMouseDown={handleMove}
      onTouchStart={handleMove}
    >
      {children}
    </StyledPopover>
  )
}

export default Popover
