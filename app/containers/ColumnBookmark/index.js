// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, type IntlShape } from 'react-intl'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import Column from 'components/Column'
import Loading from 'components/ColumnLoading'
import type { ColumnId } from './reducer'
import { makeSelectIllusts } from './selectors'
import * as actions from './actions'
import messages from './messages'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
  onFetch: () => void,
  onNext: () => void,
  onClose: () => void,
} & OP

type InjectProp = {
  intl: IntlShape,
}

class ColumnBookMark extends React.Component {
  props: Props & InjectProp
  node: HTMLElement

  componentWillMount() {
    this.props.onFetch()
  }

  _setNode = node => {
    this.node = node
  }

  render() {
    const { illusts, id, onClose, onNext, intl } = this.props

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <Column
        onClose={onClose}
        node={this.node}
        title={intl.formatMessage(messages[id])}
      >
        {illusts.length > 0
          ? <IllustList
              id={id}
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
})

function mapDispatchToProps(dispatch: Dispatch, { id }: OP) {
  return {
    onFetch() {
      dispatch(actions.fetchBookmark(id))
    },
    onNext() {
      dispatch(actions.fetchNextBookmark(id))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(injectIntl(ColumnBookMark))
