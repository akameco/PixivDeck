// @flow
import React from 'react'
import Loading from 'components/Loading'
import IntersectionObserverWrapper from 'utils/intersectionObserverWrapper'

export type Props = {
  id: number | string,
  innerRef: HTMLElement => void,
  onRequestLoadMore: Function,
  intersectionObserverWrapper: IntersectionObserverWrapper,
}

export default class LoadMore extends React.PureComponent {
  props: Props
  componentMounted: boolean = false
  node: HTMLElement

  componentDidMount() {
    if (!this.props.intersectionObserverWrapper) {
      return
    }

    this.props.intersectionObserverWrapper.observe(
      this.props.id,
      this.node,
      this.handleIntersection
    )
    this.componentMounted = true
  }

  componentWillUnmount() {
    this.componentMounted = false
  }

  handleIntersection = (entry: any) => {
    const isIntersecting = entry.intersectionRect.height > 0

    if (isIntersecting) {
      this.props.onRequestLoadMore()
    }
  }

  _setNode = (node: HTMLElement) => {
    if (node) {
      this.node = node
    }
  }

  render() {
    return (
      <div
        ref={this._setNode}
        data-id={this.props.id}
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'inherit',
        }}
      >
        <Loading wrapStyle={{ background: 'inherit' }} />
      </div>
    )
  }
}
