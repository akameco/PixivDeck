// @flow
import * as React from 'react'
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
import FilterUsersIn from './FilterUsersIn'
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
  usersIn: number,
  onFetch: () => void,
  onNext: () => void,
  setMinBookmarks: number => void,
  onFilterUsersIn: number => void,
  onStartWatch: Function,
} & OP &
  ColumnProps

class ColumnSearch extends React.PureComponent<Props> {
  node: HTMLElement

  componentWillMount() {
    this.props.onFetch()
    this.props.onStartWatch()
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
      onFilterUsersIn,
    } = this.props

    return (
      <ColumnRoot>
        <ColumnHeader name={id} onClose={onClose} onTopClick={onHeaderClick}>
          <ColumnHeaderBookmark
            id={id}
            minBookmarks={minBookmarks}
            setMinBookmarks={setMinBookmarks}
          />
          <FilterUsersIn
            onChange={onFilterUsersIn}
            defaultValue={String(this.props.usersIn)}
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
  usersIn: selectors.makeSelectUsesIn(),
})

function mapDispatchToProps(dispatch: Dispatch, { id }: OP) {
  return {
    onStartWatch() {
      dispatch(actions.startWatch(id))
    },
    onFilterUsersIn(usersIn) {
      dispatch(actions.usersIn(id, usersIn))
    },
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
