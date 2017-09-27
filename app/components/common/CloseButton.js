// @flow
import React from 'react'
import styled from 'styled-components'
import ClearIcon from 'material-ui/svg-icons/content/clear'

type Props = {
  style?: Object,
  iconStyle?: Object,
  onClick: () => void,
}

const A = styled.a`
  position: absolute;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  top: 15px;
  right: 15px;
  font-size: 24px;
`

const CloseButton = ({ onClick, style, iconStyle }: Props) => (
  <A onClick={onClick} style={style}>
    <ClearIcon style={iconStyle} />
  </A>
)

export default CloseButton
