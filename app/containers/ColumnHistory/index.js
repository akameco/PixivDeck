// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, type IntlShape } from 'react-intl'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import type { ColumnProps } from '../ColumnManager'
import type { ColumnId } from './reducer'
import { makeSelectIllusts } from './selectors'
import messages from './messages'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
} & OP &
  ColumnProps

type InjectProp = {
  intl: IntlShape,
}

class ColumnHistory extends React.PureComponent<Props & InjectProp> {
  render() {
    const { illusts, id, onClose, intl, onHeaderClick, setNode } = this.props

    return (
      <ColumnRoot>
        <ColumnHeader
          name={intl.formatMessage(messages.title)}
          onClose={onClose}
          onTopClick={onHeaderClick}
        />
        <ColumnBody isLoading={false}>
          {illusts.length > 0 && (
            <IllustList
              id={id}
              node={setNode}
              hasMore={false}
              illusts={illusts}
              onNext={() => {}}
            />
          )}
        </ColumnBody>
      </ColumnRoot>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illusts: makeSelectIllusts(),
})

const connector: Connector<OP, Props> = connect(mapStateToProps)

export default connector(injectIntl(ColumnHistory))
