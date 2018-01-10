// @flow
import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, type IntlShape } from 'react-intl'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
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
  onNext: () => void,
  actions: typeof actions,
} & OP &
  ColumnProps

type InjectProp = {
  intl: IntlShape,
}

class ColumnRanking extends React.Component<Props & InjectProp> {
  componentWillMount() {
    const { actions, id } = this.props
    actions.fetch(id)
    actions.startWatch(id)
  }

  render() {
    const { illusts, id, onClose, intl, onHeaderClick, setNode } = this.props

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
            onNext={() => this.props.actions.fetch(id)}
          />
        </ColumnBody>
      </ColumnRoot>
    )
  }
}

const mapState = createStructuredSelector({
  illusts: makeSelectIllusts(),
})

function mapDispatch(dispatch: Dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

const connector: Connector<OP, Props> = connect(mapState, mapDispatch)

export default connector(injectIntl(ColumnRanking))
