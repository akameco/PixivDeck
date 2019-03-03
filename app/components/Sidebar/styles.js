// @flow
import styled from 'styled-components'

export const Wrap = styled.header`
  display: flex;
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  flex-flow: nowrap;
  flex-direction: column;
  width: 50px;
  height: 100%;
  background-color: #292f33;
`

export const SearchWrap = styled.div`
  position: fixed;
  top: 35px;
  left: 50px;
  width: auto;
  min-width: 260px;
  height: 100%;
`
