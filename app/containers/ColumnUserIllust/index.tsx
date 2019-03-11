import * as React from 'react'
import { User } from 'types/user'
import { connect, Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import { ColumnProps } from '../ColumnManager'
import { ColumnId } from './reducer'
import { makeSelectIllusts, makeSelectUser } from './selectors'
import * as actions from './actions'

interface OP {
  id: ColumnId
}
type Props = {
  illusts: Illust[]
  user: User
  onFetch: () => undefined
  onNext: () => undefined
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
    } // TODO リミットをstoreに保存

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
