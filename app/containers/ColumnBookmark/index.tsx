import * as React from 'react'
import { connect, Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, IntlShape } from 'react-intl'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnHeader from 'components/ColumnHeader'
import ColumnBody from 'components/ColumnBody'
import { ColumnProps } from '../ColumnManager'
import { ColumnId } from './reducer'
import { makeSelectIllusts } from './selectors'
import * as actions from './actions'
import messages from './messages'

interface OP {
  id: ColumnId
}
type Props = {
  illusts: Illust[]
  onFetch: () => undefined
  onNext: () => undefined
} & OP &
  ColumnProps
interface InjectProp {
  intl: IntlShape
}

class ColumnBookMark extends React.PureComponent<Props & InjectProp> {
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
    } = this.props // TODO リミットをstoreに保存

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
