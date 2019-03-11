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
import { makeSelectIllusts } from './selectors'
import * as actions from './actions'
import messages from './messages'

type Props = {
  illusts: Illust[]
  onFetch: () => undefined
  onNext: () => undefined
  actions: typeof actions
} & ColumnProps
interface InjectProp {
  intl: IntlShape
}

class ColumnRecommended extends React.Component<Props & InjectProp> {
  componentWillMount() {
    this.props.onFetch()
  }

  handleTop = e => {
    this.props.onHeaderClick(e)
    this.props.actions.clere('recommended')
    this.props.onFetch()
  }

  render() {
    const { illusts, onClose, onNext, intl, setNode } = this.props // TODO リミットをstoreに保存

    const hasMore = illusts.length < 1000
    return (
      <ColumnRoot>
        <ColumnHeader
          name={intl.formatMessage(messages.reccomended)}
          onClose={onClose}
          onTopClick={this.handleTop}
        />
        <ColumnBody isLoading={illusts.length <= 0}>
          <IllustList
            id={'reccomended'}
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

const mapState = createStructuredSelector({
  illusts: makeSelectIllusts(),
})

function mapDispatch(dispatch: Dispatch) {
  return {
    onFetch() {
      dispatch(actions.fetch('recommended'))
    },

    onNext() {
      dispatch(actions.fetch('recommended'))
    },

    actions: bindActionCreators(actions, dispatch),
  }
}

const connector = connect(
  mapState,
  mapDispatch
)
export default connector(injectIntl(ColumnRecommended))
