// @flow
import React from 'react'
import Box from 'containers/BoxContainer'
import IntersectionObserverWrapper from 'utils/intersectionObserverWrapper'
import type { Illust } from 'types/illust'
import LoadMore from 'components/LoadMore'
import { ScrollableY } from './styles'

export type Props = {
  id: string,
  hasMore: boolean,
  illusts: Array<Illust>,
  node?: HTMLElement => void,
  onNext: Function,
}

export default class IllustList extends React.PureComponent {
  props: Props
  node: HTMLElement
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

  _setNode = (node: HTMLElement) => {
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

    let loadMore: ?React$Element<*> = null

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
      <ScrollableY innerRef={this.props.node}>
        {List}
        {loadMore}
      </ScrollableY>
    )
  }
}
