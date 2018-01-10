// @flow
import * as React from 'react'
import styled from 'styled-components'

type ItemProps = {
  start: string,
  end: string,
  onClick: () => void,
}

export const Item = ({ start, end, onClick }: ItemProps) => (
  <ItemWrap onClick={onClick}>
    <u>{start}</u>
    {end}
  </ItemWrap>
)

const ItemWrap = styled.div`
  height: 45px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(230, 239, 247);
  }
`

type Props = {
  title: string | React.Element<any>,
  children?: React.Node,
}

const Wrap = styled.div`
  box-sizing: border-box;
  background: white;
`

const Content = styled.div`
  padding-top: 4px;
`

const Title = styled.div`
  background-color: #e7e7e7;
  font-size: 0.8rem;
  padding: 0 12px;
  color: #8f8f8f;
  margin: -4px 0 0;
  border: 0;
`

const Popover = ({ children, title }: Props) => (
  <Wrap>
    <Content>
      <Title>{title}</Title>
      <div>{children}</div>
    </Content>
  </Wrap>
)

export default Popover
