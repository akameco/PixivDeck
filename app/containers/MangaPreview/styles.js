// @flow
import styled from 'styled-components'

export const Item = styled.div`display: block;`

export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  user-select: none;
  cursor: zoom-out;
`

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  background: rgba(24, 24, 24, 0.97);
  cursor: pointer;
  text-align: center;
  flex-direction: column;
  overflow-y: scroll;
  z-index: 999;
`
