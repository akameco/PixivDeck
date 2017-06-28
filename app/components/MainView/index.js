// @flow
import styled from 'styled-components'
import { key } from 'styleTheme'

const MainView = styled.div`
  position: absolute;
  left: 50px;
  width: calc(100% - 50px);
  height: 100%;
  overflow-y: hidden;
  background-color: ${key('base')};
`

export default MainView
