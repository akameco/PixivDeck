// @flow
import styled from 'styled-components'

const showTransition = 'left 400ms ease-out 0, opacity 400ms ease-out'
const hideTransition = 'left 0ms ease-out, opacity 200ms ease-out'

const StyledOverlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 0;
  background-color: rgba(41, 47, 51, 0.9);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateZ(0);
  left: ${props => (props.show ? 0 : '-100%')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: ${props => (props.show ? showTransition : hideTransition)};
`

export default StyledOverlay
