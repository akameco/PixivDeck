import * as React from 'react'

interface DP {
  size: number
  viewBox: string
}
export interface Props {
  style?: object
  color?: string
  hoverColor?: string
  onMouseEnter?: Function
  onMouseLeave?: Function
  children?: React.ReactNode | null | undefined
  size?: number
  viewBox?: string
}
interface State {
  hoverd: boolean
}
export default class Icon extends React.PureComponent<Props, State> {
  static defaultProps: DP = {
    viewBox: '0 0 24 24',
    size: 24,
  }
  state: State = {
    hoverd: false,
  }
  handleMouseEnter = (event: Event) => {
    this.setState({
      hoverd: true,
    })

    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event)
    }
  }
  handleMouseLeave = (event: Event) => {
    this.setState({
      hoverd: false,
    })

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event)
    }
  }

  render() {
    const { style, color, hoverColor, viewBox, size, children } = this.props
    const offColor = color ? color : 'currentColor'
    const onColor = hoverColor ? hoverColor : offColor
    const mergedStyles = {
      fill: this.state.hoverd ? onColor : offColor,
      display: 'inline-block',
      height: size,
      width: size,
      userSelect: 'none',
      ...style,
    }
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
