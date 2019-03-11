import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { removeTable } from 'containers/Table/actions'
import scrollToTopBind, { HandleHeaderClick } from 'utils/scrollToTopBind'
import ColumnRanking from '../ColumnRanking'
import ColumnRankingR18 from '../ColumnRankingR18'
import ColumnBookmark from '../ColumnBookmark'
import ColumnFollow from '../ColumnFollow'
import ColumnUserIllust from '../ColumnUserIllust'
import ColumnSearch from '../ColumnSearch'
import ColumnHistory from '../ColumnHistory'
import ColumnRecommended from '../ColumnRecommended'
import { ColumnManagerId, ColumnType } from './reducer'
import { makeSelectColumnId, makeSelectType } from './selectors'

export interface Props {
  id: any
  type: ColumnType
  onClose: () => undefined
}

interface State {
  onHeaderClick: HandleHeaderClick
}

export interface ColumnProps {
  onHeaderClick: HandleHeaderClick
  setNode: () => undefined
  onClose: () => undefined
}

class ColumnManager extends React.PureComponent<Props, State> {
  state: State = {
    onHeaderClick: () => {},
  }
  setNode = node => {
    if (node) {
      this.setState({
        onHeaderClick: scrollToTopBind(node),
      })
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
    } else if (type === 'RECOMMENDED') {
      return (
        <ColumnRecommended {...rest} {...this.state} setNode={this.setNode} />
      )
    }

    return null
  }
}

interface OP {
  id: ColumnManagerId
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

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(ColumnManager)
