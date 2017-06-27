// @flow
import React, { Component } from 'react'
import { connect, type Connector } from 'react-redux'
import { findDOMNode } from 'react-dom'
import scrollTop from 'residual-scroll-top'
import type { Dispatch, State as ReduxState } from 'types'
import type { Illust } from 'types/illust'
import type { ColumnType } from 'types/column'
import {
  fetchColumn,
  closeColumn,
  nextColumnPage,
  checkColumnUpdate,
} from 'actions'
import { getIllusts, getColumn } from 'reducers'
import Column from 'components/Column'
import ColumnContent from '../../components/Column/ColumnContent'
import Loading from './Loding'

type Props = {
  column: ColumnType,
  illusts: Array<Illust>,
  onNextPage: () => void,
  onClose: () => void,
  fetchColumn: () => void,
  checkColumnUpdate: () => void,
}

class ColumnContainer extends Component {
  props: Props
  timer: number
  target: HTMLElement
  root: HTMLElement

  componentDidMount() {
    this.init()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  async init() {
    const { column: { timer }, fetchColumn, checkColumnUpdate } = this.props

    fetchColumn()

    this.timer = setInterval(() => {
      checkColumnUpdate()
    }, timer)
  }

  handleReload = () => {
    this.props.checkColumnUpdate()
  }

  handleTopClick = (e: Event) => {
    e.preventDefault()
    const node = findDOMNode(this.root)
    if (node && node.scrollTop === 0) {
      return
    }
    if (node) {
      scrollTop(node, () => {
        this.handleReload()
      })
    }
  }

  render() {
    const { column, illusts, onNextPage, onClose } = this.props
    return (
      <Column
        column={column}
        onReload={this.handleReload}
        onClose={onClose}
        onClickHeader={this.handleTopClick}
      >
        {illusts.length > 0
          ? <ColumnContent
              root={c => {
                this.target = c
              }}
              targetRef={c => {
                this.root = c
              }}
              onIntersect={onNextPage}
              illusts={illusts}
            />
          : <Loading />}
      </Column>
    )
  }
}

type OwnProps = {
  id: string,
}

const mapStateToProps = (state: ReduxState, { id }) => ({
  column: getColumn(state, id),
  illusts: getIllusts(state, id),
})

const mapDispatchToProps = (dispatch: Dispatch, { id }) => ({
  fetchColumn() {
    dispatch(fetchColumn(id))
  },
  checkColumnUpdate() {
    dispatch(checkColumnUpdate(id))
  },
  onNextPage() {
    dispatch(nextColumnPage(id))
  },
  onClose() {
    dispatch(closeColumn(id))
  },
})

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(ColumnContainer)
