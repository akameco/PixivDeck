// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import scrollTop from 'residual-scroll-top'
import type { Illust } from 'types/illust'
import type { ColumnType } from 'types/column'
import * as colors from 'constants/colors'
import Loading from 'components/Loading'
import ColumnHeader from './ColumnHeader'
import ColumnContent from './ColumnContent'

const Wrap = styled.div`
	margin: 0;
	width: 100%;
	height: calc(100% - 2px);
	min-width: 300px;
	max-height: 100vh;
	overflow-x: hidden;
	overflow-y: hidden;
	background-color: ${colors.background};
	border: 2px solid #444448;
`

type Props = {
  illusts: Array<Illust>,
  column: ColumnType,
  onClose: () => void,
  onReload: () => void,
  onNextPage: () => void,
}

type State = {
  toTop: boolean,
}

export default class Column extends Component {
  props: Props
  state: State
  target: Component<*, *, *>
  root: typeof ColumnContent

  state = { toTop: false }

  handleTopClick = (e: Event) => {
    e.preventDefault()
    const node = findDOMNode(this.root)
    if (node && node.scrollTop === 0) {
      return
    }
    if (node) {
      scrollTop(node, () => {
        this.props.onReload()
      })
    }
  }

  render() {
    const { column, illusts, onClose, onNextPage } = this.props
    return (
      <Wrap>
        <ColumnHeader
          column={column}
          onClose={onClose}
          onTopClick={this.handleTopClick}
        />
        {illusts.length > 0
          ? <ColumnContent
              root={c => {
                // eslint-disable-line react/jsx-no-bind
                this.target = c
              }}
              targetRef={c => {
                // eslint-disable-line react/jsx-no-bind
                this.root = c
              }}
              onIntersect={onNextPage}
              illusts={illusts}
            />
          : <ColumnLoading />}
      </Wrap>
    )
  }
}

const LoadingWrap = styled.div`
	display: flex;
	justify-content: center;
	background: #4a4a4a;
	height: 100%;
`

const ColumnLoading = () =>
  <LoadingWrap>
    <Loading wrapStyle={{ background: '#121212' }} />
  </LoadingWrap>
