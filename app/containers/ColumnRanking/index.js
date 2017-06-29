// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import Column from 'components/Column'
import type { ColumnId } from '../ColumnManager/reducer'
import Loading from '../ColumnContainer/Loding'
import { makeSelectIllusts, makeSelectTitle } from './selectors'
import * as actions from './actions'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
  title: string,
  onFetch: () => void,
} & OP

class ColumnRanking extends React.Component {
  props: Props
  node: HTMLElement

  componentWillMount() {
    this.props.onFetch()
  }

  _setNode = node => {
    this.node = node
  }

  render() {
    const { illusts, id, title } = this.props

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <Column onClose={() => {}} node={this.node} title={title}>
        {illusts.length > 0
          ? <IllustList
              id={id}
              node={this._setNode}
              hasMore={hasMore}
              illusts={illusts}
              onNext={() => {}}
            />
          : <Loading />}
      </Column>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illusts: makeSelectIllusts(),
  title: makeSelectTitle(),
})

function mapDispatchToProps(dispatch: Dispatch, { id }: OP) {
  return {
    onFetch() {
      dispatch(actions.fetchRanking(id))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnRanking)
