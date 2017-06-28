// @flow
import React from 'react'
import styled from 'styled-components'
import Box from 'containers/BoxContainer'
import IntersectionObserverWrapper from 'components/common/intersectionObserverWrapper'
import type { Illust } from 'types/illust'
import LoadMore from 'components/LoadMore'

export type Props = {
  id: string,
  hasMore: boolean,
  illusts: Array<Illust>,
  node?: HTMLElement => void,
  onNext: Function,
}

const ScrollableY = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`

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
    const List = illusts.map(illust => <Box key={illust.id} illust={illust} />)

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
