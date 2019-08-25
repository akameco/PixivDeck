import * as React from 'react'
import styled from 'styled-components'
import { key } from 'styles/styleTheme'

const View = styled.div`
  margin: 0;
  width: 100%;
  height: calc(100% - 2px);
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${key('base')};
  border: 2px solid #444448;
`
interface Props {
  children?: React.Node
}
export default function ColumnRoot({ children }: Props) {
  return <View>{children}</View>
}
