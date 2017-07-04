// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { removeTable } from 'containers/Table/actions'
import scrollToTopBind, { type HandleHeaderClick } from 'utils/scrollToTopBind'
import ColumnRanking from '../ColumnRanking'
import ColumnRankingR18 from '../ColumnRankingR18'
import ColumnBookmark from '../ColumnBookmark'
import ColumnFollow from '../ColumnFollow'
import ColumnUserIllust from '../ColumnUserIllust'
import ColumnSearch from '../ColumnSearch'
import ColumnHistory from '../ColumnHistory'
import type { ColumnManagerId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

export type Props = {
  id: any, // TODO
  type: ColumnType,
  onClose: () => void,
}

type State = {
  onHeaderClick: HandleHeaderClick,
}

export type ColumnProps = {
  onHeaderClick: HandleHeaderClick,
  setNode: () => void,
  onClose: () => void,
}

class ColumnManager extends React.PureComponent {
  props: Props
  state: State = { onHeaderClick: () => {} }

  setNode = node => {
    if (node) {
      this.setState({ onHeaderClick: scrollToTopBind(node) })
    }
  }

  render() {
    const { type, ...rest } = this.props

    if (type === 'RANKING') {
      // TODO 型がうまく扱えない
      // $FlowFixMe
      return <ColumnRanking {...rest} {...this.state} setNode={this.setNode} />
    } else if (type === 'RANKING_R18') {
      return (
        // $FlowFixMe
        <ColumnRankingR18 {...rest} {...this.state} setNode={this.setNode} />
      )
    } else if (type === 'BOOKMARK') {
      // $FlowFixMe
      return <ColumnBookmark {...rest} {...this.state} setNode={this.setNode} />
    } else if (type === 'FOLLOW') {
      // $FlowFixMe
      return <ColumnFollow {...rest} {...this.state} setNode={this.setNode} />
    } else if (type === 'USER_ILLUST') {
      return (
        // $FlowFixMe
        <ColumnUserIllust {...rest} {...this.state} setNode={this.setNode} />
      )
    } else if (type === 'SEARCH') {
      // $FlowFixMe
      return <ColumnSearch {...rest} {...this.state} setNode={this.setNode} />
    } else if (type === 'HISTORY') {
      // $FlowFixMe
      return <ColumnHistory {...rest} {...this.state} setNode={this.setNode} />
    }
    return null
  }
}

type OP = {
  id: ColumnManagerId,
}

const mapStateToProps = createStructuredSelector({
  id: makeSelectColumnId(),
  type: makeSelectType(),
})

const mapDispatchToProps = (dispatch: Dispatch, { id }: OP) => ({
  onClose() {
    dispatch(removeTable(id))
  },
})

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnManager)
