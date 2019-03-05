import styled from 'styled-components'
import { key } from 'styles/styleTheme'

export const ScrollableY = styled.div`
  background-color: ${key('base')};
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  &::-webkit-scrollbar {
    width: 11px;
  }
  &::-webkit-scrollbar-thumb {
    min-height: 50px;
    border-radius: 5px;
    background-color: #444448;
  }
  &::-webkit-scrollbar-track {
    border-left: 1px solid #444448;
  }
`
