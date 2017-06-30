// @flow
import React from 'react'
import type { User } from 'types/user'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import Column from 'components/Column'
import Loading from 'components/ColumnLoading'
import type { ColumnId } from './reducer'
import { makeSelectIllusts, makeSelectUser } from './selectors'
import * as actions from './actions'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
  user: User,
  onFetch: () => void,
  onNext: () => void,
  onClose: () => void,
} & OP

class ColumnUserIllust extends React.Component {
  props: Props
  node: HTMLElement

  componentWillMount() {
    this.props.onFetch()
  }

  _setNode = node => {
    this.node = node
  }

  render() {
    const { illusts, id, onClose, onNext, user } = this.props

    const title = user && user.name

    if (!title) {
      return null
    }

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <Column onClose={onClose} node={this.node} title={title}>
        {illusts.length > 0
          ? <IllustList
              id={String(id)}
              node={this._setNode}
              hasMore={hasMore}
              illusts={illusts}
              onNext={onNext}
            />
          : <Loading />}
      </Column>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illusts: makeSelectIllusts(),
  user: makeSelectUser(),
})

function mapDispatchToProps(dispatch: Dispatch, { id }: OP) {
  return {
    onFetch() {
      dispatch(actions.fetchUserIllust(id))
    },
    onNext() {
      dispatch(actions.fetchNextUserIllust(id))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnUserIllust)
