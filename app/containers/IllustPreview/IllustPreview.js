// @flow
import React from 'react'
import styled from 'styled-components'
import LazyImg from './LazyImg'

type Props = {
  from: string,
  to: string,
  width: number,
  height: number,
  isLoaded: boolean,
  onLoad: () => void,
  onUnLoad: () => void,
  onClose: () => void,
}

export default class IllustPreview extends React.PureComponent {
  props: Props

  componentWillUnmount() {
    this.props.onUnLoad()
  }

  handleOnClose = () => {
    this.props.onClose()
  }

  render() {
    const { width, height, from, to } = this.props

    return (
      <StyledPreview onClick={this.handleOnClose}>
        <LazyImg
          from={from}
          to={to}
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
