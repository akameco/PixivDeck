// @flow
import React from 'react'

type DP = {
  size: number,
  viewBox: string,
}

export type Props = {
  style?: Object,
  color?: string,
  hoverColor?: string,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  children?: ?React$Element<*>,
  size?: number,
  viewBox?: string,
}

type State = {
  hoverd: boolean,
}

export default class Icon extends React.PureComponent<DP, Props, State> {
  props: Props
  state: State = {
    hoverd: false,
  }

  static defaultProps: DP = {
    viewBox: '0 0 24 24',
    size: 24,
  }

  state: { hoverd: boolean } = { hoverd: false }

  handleMouseEnter = (event: Event) => {
    this.setState({ hoverd: true })
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event)
    }
  }

  handleMouseLeave = (event: Event) => {
    this.setState({ hoverd: false })
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event)
    }
  }

  render() {
    const { style, color, hoverColor, viewBox, size, children } = this.props

    const offColor = color ? color : 'currentColor'
    const onColor = hoverColor ? hoverColor : offColor

    const mergedStyles = Object.assign(
      {
        fill: this.state.hoverd ? onColor : offColor,
        display: 'inline-block',
        height: size,
        width: size,
        userSelect: 'none',
      },
      style
    )

    return (
      <svg
        viewBox={viewBox}
        style={mergedStyles}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <g>{children}</g>
      </svg>
    )
  }
}
