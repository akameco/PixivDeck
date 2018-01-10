// @flow
import * as React from 'react'
import type { User } from 'types/user'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import type { ColumnProps } from '../ColumnManager'
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
} & OP &
  ColumnProps

class ColumnUserIllust extends React.Component<Props> {
  componentWillMount() {
    this.props.onFetch()
  }

  render() {
    const {
      illusts,
      id,
      onClose,
      onNext,
      user,
      onHeaderClick,
      setNode,
    } = this.props

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
          onTopClick={onHeaderClick}
        />
        <ColumnBody isLoading={illusts.length <= 0}>
          <IllustList
            id={String(id)}
            node={setNode}
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
      dispatch(actions.fetch(id))
    },
    onNext() {
      dispatch(actions.fetchNext(id))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnUserIllust)
