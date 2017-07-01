// @flow
import React from 'react'
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import scrollTop from 'residual-scroll-top'
import type { Dispatch } from 'types'
import type { Illust } from 'types/illust'
import IllustList from 'components/IllustList'
import ColumnRoot from 'components/ColumnRoot'
import ColumnBody from 'components/ColumnBody'
import ColumnHeader from 'components/ColumnHeader'
import Loading from 'components/ColumnLoading'
import ColumnHeaderBookmark from 'components/ColumnHeaderBookmark'
import type { ColumnId } from './reducer'
import * as selectors from './selectors'
import * as actions from './actions'

type OP = {
  id: ColumnId,
}

type Props = {
  illusts: Array<Illust>,
  minBookmarks: number,
  onFetch: () => void,
  onNext: () => void,
  onClose: () => void,
  setMinBookmarks: number => void,
} & OP

class ColumnSearch extends React.Component {
  props: Props
  node: HTMLElement

  handleHeaderClick = (e: Event) => {
    e.preventDefault()
    if (this.node && this.node.scrollTop === 0) {
      return
    }
    if (this.node) {
      scrollTop(this.node, () => {
        // TOOD: Callback
        // props.checkColumnUpdate()
      })
    }
  }

  componentWillMount() {
    this.props.onFetch()
  }

  _setNode = node => {
    this.node = node
  }

  render() {
    const {
      illusts,
      id,
      onClose,
      onNext,
      minBookmarks,
      setMinBookmarks,
    } = this.props

    // TODO リミットをstoreに保存
    const hasMore = illusts.length < 200

    return (
      <ColumnRoot>
        <ColumnHeader
          name={id}
          onClose={onClose}
          onTopClick={this.handleHeaderClick}
        >
          <ColumnHeaderBookmark
            id={id}
            minBookmarks={minBookmarks}
            setMinBookmarks={setMinBookmarks}
          />
        </ColumnHeader>
        <ColumnBody>
          {illusts.length > 0
            ? <IllustList
                id={String(id)}
                node={this._setNode}
                hasMore={hasMore}
                illusts={illusts}
                onNext={onNext}
              />
            : <Loading />}
        </ColumnBody>
      </ColumnRoot>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  illusts: selectors.makeLimitedSelectIllusts(),
  minBookmarks: selectors.makeSelectMinBookmark(),
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
