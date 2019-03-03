// @flow
import * as React from 'react'
import Box from 'containers/BoxContainer'
import IntersectionObserverWrapper from 'utils/intersectionObserverWrapper'
import type { Illust } from 'types/illust'
import LoadMore from 'components/LoadMore'
import { ScrollableY } from './styles'

export type Props = {
  id: string,
  hasMore: boolean,
  illusts: Array<Illust>,
  node?: (HTMLElement | null) => void,
  onNext: Function,
}

export default class IllustList extends React.PureComponent<Props> {
  node: HTMLElement | null
  intersectionObserverWrapper = new IntersectionObserverWrapper()

  attachIntersectionObserver = () => {
    this.intersectionObserverWrapper.connect({
      root: this.node,
      rootMargin: '300%',
    })
  }

  detachIntersectionObserver = () => {
    this.intersectionObserverWrapper.disconnect()
  }

  componentWillUnmount() {
    this.detachIntersectionObserver()
  }

  componentDidMount() {
    this.attachIntersectionObserver()
  }

  _setNode = (node: HTMLElement | null) => {
    if (node) {
      this.node = node
    }
  }

  render() {
    const { id, illusts, hasMore } = this.props
    if (illusts.length === 0) {
      return null
    }

    const List = illusts.map(illust => <Box key={illust.id} id={illust.id} />)

    let loadMore: ?React.Element<any> = null

    if (hasMore) {
      loadMore = (
        <LoadMore
          id={id}
          innerRef={this._setNode}
          onRequestLoadMore={this.props.onNext}
          intersectionObserverWrapper={this.intersectionObserverWrapper}
        />
      )
    }

    return (
      <ScrollableY ref={this.props.node}>
        {List}
        {loadMore}
      </ScrollableY>
    )
  }
}
