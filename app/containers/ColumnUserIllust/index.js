// @flow
import React from 'react'
import type { User } from 'types/user'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import scrollToTopBind, { type HandleHeaderClick } from 'util/scrollToTopBind'
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
  handleHeaderClick: HandleHeaderClick

  componentWillMount() {
    this.props.onFetch()
  }

  _setNode = node => {
    if (node) {
      this.node = node
      this.handleHeaderClick = scrollToTopBind(this.node)
    }
  }

  render() {
    const { illusts, id, onClose, onNext, user } = this.props

    const name = user && user.name

    if (!name) {
      return null
    }

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <ColumnRoot>
        <ColumnHeader
          name={name}
          onClose={onClose}
          onTopClick={this.handleHeaderClick}
        />
        <ColumnBody isLoading={illusts.length <= 0}>
          <IllustList
            id={String(id)}
            node={this._setNode}
            hasMore={hasMore}
            illusts={illusts}
            onNext={onNext}
          />
        </ColumnBody>
      </ColumnRoot>
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
