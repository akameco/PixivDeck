import styled from 'styled-components'
import * as React from 'react'

interface Props {
  size: number
  src: string
  style?: object
  className?: string
  color?: string
}
const StyledAvater = styled.img`
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${props => props.color || '#fff'};
`

const Avater = (props: Props) => <StyledAvater {...props} />

export default Avater
