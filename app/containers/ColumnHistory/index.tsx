import * as React from 'react'
import { connect, Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, IntlShape } from 'react-intl'
import { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import { ColumnProps } from '../ColumnManager'
import { ColumnId } from './reducer'
import { makeSelectIllusts } from './selectors'
import messages from './messages'

interface OP {
  id: ColumnId
}
type Props = {
  illusts: Illust[]
} & OP &
  ColumnProps
interface InjectProp {
  intl: IntlShape
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
