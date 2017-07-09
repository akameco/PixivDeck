// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, type IntlShape } from 'react-intl'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnHeader from 'components/ColumnHeader'
import ColumnBody from 'components/ColumnBody'
import type { ColumnProps } from '../ColumnManager'
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
} & OP &
  ColumnProps

type InjectProp = {
  intl: IntlShape,
}

class ColumnBookMark extends React.PureComponent {
  props: Props & InjectProp

  componentWillMount() {
    this.props.onFetch()
  }

  render() {
    const {
      illusts,
      id,
      onClose,
      onNext,
      intl,
      onHeaderClick,
      setNode,
    } = this.props

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <ColumnRoot>
        <ColumnHeader
          name={intl.formatMessage(messages[id])}
          onClose={onClose}
          onTopClick={onHeaderClick}
        />
        <ColumnBody isLoading={illusts.length <= 0}>
          <IllustList
            id={id}
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

export default connector(injectIntl(ColumnBookMark))
