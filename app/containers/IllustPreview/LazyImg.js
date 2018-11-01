// @flow
import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import CloseButton from 'components/common/CloseButton'
import { LazyImgWrapper as Wrapper } from './styles'

type Size = {
  width: number | 'auto',
  height: number | 'auto',
}

function calcSize(width: number, height: number): Size {
  const { innerWidth, innerHeight } = window
  if (height > innerHeight && width > innerWidth) {
    return width * innerHeight < height * innerWidth
      ? { width: 'auto', height: innerHeight }
      : { width: innerWidth, height: 'auto' }
  }
  if (height > innerHeight) {
    return { width: 'auto', height: innerHeight }
  }
  if (width > innerWidth) {
    return { width: innerWidth, height: 'auto' }
  }

  return { width, height }
}

function calcMarginTop(node: HTMLElement): number {
  if (!node) {
    return 10
  }

  const height = node && node.clientHeight

  if (window.innerHeight > height) {
    const top = (window.innerHeight - height) / 2
    return top
  }

  return 10
}

type Props = {
  from: string,
  original: string,
  width: number,
  height: number,
  isLoaded: boolean,
  onLoad: () => void,
  onClose: () => void,
}

type State = {
  isClicked: boolean,
  fromMarginTop: number,
  toMarginTop: number,
}

export default class LazyImg extends React.PureComponent<Props, State> {
  to: HTMLElement
  from: HTMLElement
  state: State = {
    isClicked: false,
    fromMarginTop: 0,
    toMarginTop: 0,
  }

  handleLoad = () => {
    this.setState({
      fromMarginTop: calcMarginTop(this.from),
    })

    const img = new Image()

    img.addEventListener('load', () => {
      this.props.onLoad()
      this.setState({
        toMarginTop: calcMarginTop(this.to),
      })
    })

    img.src = this.props.original
  }

  handleClick = (event: Event) => {
    event.stopPropagation()
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    const { width, height, isLoaded, onClose } = this.props
    const { isClicked } = this.state
    const fromStyle = calcSize(width, height)

    if (isLoaded) {
      return (
        <Wrapper>
          <CloseButton
            style={{ color: '#676767', top: '10px', right: '10px' }}
            iconStyle={{ fill: 'white' }}
            onClick={onClose}
          />
          <Img
            src={this.props.original}
            width={width}
            height={height}
            marginTop={this.state.toMarginTop}
            isClicked={isClicked}
            onClick={this.handleClick}
            innerRef={c => {
              // eslint-disable-line react/jsx-no-bind
              this.to = c
            }}
          />
        </Wrapper>
      )
    }

    return (
      <Wrapper>
        <CloseButton onClick={onClose} iconStyle={{ fill: 'white' }} />
        <FromImg
          src={this.props.from}
          marginTop={this.state.fromMarginTop}
          style={fromStyle}
          onLoad={this.handleLoad}
          innerRef={c => {
            // eslint-disable-line react/jsx-no-bind
            this.from = c
          }}
        />
      </Wrapper>
    )
  }
}

const FromImg = styled.img`
  width: auto;
  height: auto;
  max-width: 100vw;
  max-height: 100vh;
  margin: auto;
  margin-top: ${props => props.marginTop}px;
  user-select: none;
  cursor: wait;
`

const fadeIn = keyframes`
	0% { filter: blur(1px); }

	100% { filter: none; }
`

const Img = styled.img`
  width: auto;
  height: auto;
  margin: auto;
  user-select: none;
  margin-top: ${props => props.marginTop}px;
  max-width: ${props => (props.isClicked ? 'none' : '100vw')};
  max-height: ${props => (props.isClicked ? 'none' : '100vh')};
  cursor: ${props => (props.isClicked ? 'zoom-out' : 'zoom-in')};
  animation: ${fadeIn} 600ms forwards;
`
