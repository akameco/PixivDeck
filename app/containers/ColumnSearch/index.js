// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import ColumnHeaderBookmark from 'components/ColumnHeaderBookmark'
import type { ColumnProps } from '../ColumnManager'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'
import * as actions from './actions'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
  minBookmarks: number,
  hasMore: boolean,
  onFetch: () => void,
  onNext: () => void,
  setMinBookmarks: number => void,
} & OP &
  ColumnProps

class ColumnSearch extends React.PureComponent {
  props: Props
  node: HTMLElement

  componentWillMount() {
    this.props.onFetch()
  }

  render() {
    const {
      illusts,
      id,
      onClose,
      onNext,
      minBookmarks,
      setMinBookmarks,
      hasMore,
      onHeaderClick,
      setNode,
    } = this.props

    return (
      <ColumnRoot>
        <ColumnHeader name={id} onClose={onClose} onTopClick={onHeaderClick}>
          <ColumnHeaderBookmark
            id={id}
            minBookmarks={minBookmarks}
            setMinBookmarks={setMinBookmarks}
          />
        </ColumnHeader>
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
  illusts: selectors.makeLimitedSelectIllusts(),
  minBookmarks: selectors.makeSelectMinBookmark(),
  hasMore: selectors.makeSelectHasMore(),
})

function mapDispatchToProps(dispatch: Dispatch, { id }: OP) {
  return {
    onFetch() {
      dispatch(actions.fetch(id))
    },
    onNext() {
      dispatch(actions.fetchNext(id))
    },
    setMinBookmarks(minBookmarks) {
      dispatch(actions.setMinBookbook(id, minBookmarks))
    },
  }
}

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(ColumnSearch)
