import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl, IntlShape } from 'react-intl'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
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
  onNext: () => undefined
  actions: typeof actions
} & OP &
  ColumnProps
interface InjectProp {
  intl: IntlShape
}

class ColumnRankingR18 extends React.Component<Props & InjectProp> {
  componentWillMount() {
    const { actions, id } = this.props
    actions.fetch(id)
    actions.startWatch(id)
  }

  handleTop = e => {
    this.props.onHeaderClick(e)
    this.props.actions.clere(this.props.id)
    this.props.actions.fetch(this.props.id)
  }

  render() {
    const { illusts, id, onClose, intl, setNode } = this.props // TODO リミットをstoreに保存

    const hasMore = illusts.length < 200
    return (
      <ColumnRoot>
        <ColumnHeader
          name={intl.formatMessage(messages[id] as any)}
          onClose={onClose}
          onTopClick={this.handleTop}
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

const connector = connect(
  mapState,
  mapDispatch
)
export default connector(injectIntl(ColumnRankingR18))
