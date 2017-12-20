// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from 'components/common/Icon'

declare class IntersectionObserver {
  constructor: Function;
  observe: Function;
  unobserve: Function;
}

const StyledImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 20px;
  text-align: center;
  cursor: zoom-in;
  overflow: hidden;
  border-radius: 3px;

  img {
    max-width: 100%;
    max-height: 100%;
    min-height: 100px;
    margin: -10px;
    overflow: hidden;
  }

  svg {
    position: absolute;
    width: 25px;
    height: 25px;
    padding: 2px;
    fill: white;
    background-color: rgba(180, 180, 180, 0.5);
    border-radius: 4px;
    margin-top: 5px;
    margin-left: 5px;
    z-index: 100;
  }
`

type Props = {
  src: string,
  isManga?: boolean,
  onClick: Function,
}

type State = {
  isVisible: boolean,
  isLoaded: boolean,
}

export default class LazyLoadImg extends React.PureComponent {
  props: Props
  state: State = {
    isVisible: false,
    isLoaded: false,
  }
  node: HTMLElement
  io: IntersectionObserver

  componentDidMount() {
    this.init()
  }

  componentWillUnmount() {
    this.io.unobserve(this.node)
  }

  init() {
    if (!this.node) {
      return
    }

    this.io = new IntersectionObserver(
      (entries: Array<{ intersectionRatio: number }>) => {
        // eslint-disable-line no-undef
        const intersectionRatio = entries[0].intersectionRatio
        if (intersectionRatio <= 0) {
          this.setState({ isVisible: false })
        }
        this.update()
      },
      { rootMargin: '300% 0px' }
    )
    this.io.observe(this.node)
  }

  update() {
    this.setState({ isVisible: true })
    const img = new Image()

    img.onload = () => {
      this.setState({ isLoaded: true })
    }

    img.src = this.props.src
  }

  setNode = (node: HTMLElement) => {
    if (node) {
      this.node = node
    }
  }

  render() {
    const { src, onClick, isManga } = this.props
    const { isVisible, isLoaded } = this.state
    return (
      <StyledImg innerRef={this.setNode}>
        {isManga && isLoaded && <Icon type="manga" color="#fff" />}
        {isVisible && isLoaded ? (
          <img src={src} onClick={onClick} />
        ) : (
          <img height={300} />
        )}
      </StyledImg>
    )
  }
}
