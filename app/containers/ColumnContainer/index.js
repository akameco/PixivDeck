// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
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
import IllustList from 'components/IllustList'
import Loading from './Loding'

type Props = {
  column: ColumnType,
  illusts: Array<Illust>,
  onNextPage: () => void,
  onClose: () => void,
  fetchColumn: () => void,
  checkColumnUpdate: () => void,
}

class ColumnContainer extends React.PureComponent {
  props: Props
  timer: number
  target: HTMLElement
  node: HTMLElement

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

  handleHeaderClick = (e: Event) => {
    e.preventDefault()
    if (this.node && this.node.scrollTop === 0) {
      return
    }
    if (this.node) {
      scrollTop(this.node, () => {
        this.props.checkColumnUpdate()
      })
    }
  }

  _setNode = node => {
    this.node = node
  }

  render() {
    const {
      column,
      illusts,
      onNextPage,
      onClose,
      checkColumnUpdate,
    } = this.props

    const hasMore = illusts.length < 100

    return (
      <Column
        column={column}
        onReload={checkColumnUpdate}
        onClose={onClose}
        onClickHeader={this.handleHeaderClick}
      >
        {illusts.length > 0
          ? <IllustList
              id={column.id}
              node={this._setNode}
              illusts={illusts}
              onNext={onNextPage}
              hasMore={hasMore}
            />
          : <Loading />}
      </Column>
    )
  }
}

type OP = {
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

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(ColumnContainer)
