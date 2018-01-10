// @flow
import * as React from 'react'
import styled from 'styled-components'

const StyledPopover = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0;
  ${p => p.open && 'padding: 5px 5%;'} max-height: ${p =>
      p.open ? '400px' : 0};
  transition: ${p =>
    p.open
      ? 'max-height, 0.6s, 0ms, ease-out'
      : 'max-height, 0.4s, 0ms, ease-in'};
  > * {
    width: 90%;
  }
`

type Props = {
  children?: React.Node,
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
