import styled from 'styled-components'
import { key } from 'styles/styleTheme'

const A = styled.a`
  color: ${key('blue')};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export default A
