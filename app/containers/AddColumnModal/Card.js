// @flow
import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 170px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  padding: 0 0 8px;
  margin: 0 10px;
  background: #fff;
  overflow-y: auto;
`

const Title = styled.div`
  font-size: 14px;
  padding-left: 16px;
  color: rgba(0, 0, 0, 0.56);
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  line-height: 40px;
`

const ListWrap = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;
`

const List = ({ children }: { children?: React.Node }) => (
  <ListWrap>{children}</ListWrap>
)

type Props = {
  title: string | React.Element<any>,
  children?: React.Node,
}

const Card = ({ title, children }: Props) => (
  <Wrap>
    <Title>{title}</Title>
    <List>{children}</List>
  </Wrap>
)

export default Card
