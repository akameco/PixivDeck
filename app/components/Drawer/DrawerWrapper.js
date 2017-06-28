// @flow
import styled from 'styled-components'
import { key } from 'styleTheme'

const DrawerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: ${key('base')};
`

export default DrawerWrapper
