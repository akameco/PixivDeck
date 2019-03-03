// @flow
import * as React from 'react'
import styled from 'styled-components'
import LazyImg from './LazyImg'

type Props = {
  from: string,
  original: string,
  width: number,
  height: number,
  isLoaded: boolean,
  onLoad: () => void,
  onUnLoad: () => void,
  onClose: () => void,
}

export default class IllustPreview extends React.PureComponent<Props> {
  componentWillUnmount() {
    this.props.onUnLoad()
    window.removeEventListener('keydown', this.escToClose, false)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.escToClose, false)
  }

  handleOnClose = () => {
    this.props.onClose()
  }

  escToClose = (event: Event) => {
    // $FlowFixMe
    if (event.keyCode === 27) {
      this.handleOnClose()
    }
  }

  render() {
    const { width, height, from, original } = this.props

    return (
      <StyledPreview onClick={this.handleOnClose}>
        <LazyImg
          from={from}
          original={original}
          width={width}
          height={height}
          isLoaded={this.props.isLoaded}
          onLoad={this.props.onLoad}
          onClose={this.props.onClose}
        />
      </StyledPreview>
    )
  }
}

const StyledPreview = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  background: rgba(24, 24, 24, 0.97);
  cursor: pointer;
  overflow: auto;
  z-index: 999;
`
