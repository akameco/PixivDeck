import * as React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import ColumnHeaderBookmark from 'components/ColumnHeaderBookmark'
import { ColumnProps } from '../ColumnManager'
import FilterUsersIn from './FilterUsersIn'
// import { ColumnId } from './reducer'
import * as selectors from './selectors'
import * as actions from './actions'

interface OP {
  id: string
}
type Props = {
  illusts: Illust[]
  minBookmarks: number
  hasMore: boolean
  usersIn: number
  onFetch: () => undefined
  onNext: () => undefined
  setMinBookmarks: (a: number) => undefined
  onFilterUsersIn: (a: number) => undefined
  onStartWatch: any
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

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(ColumnSearch)
