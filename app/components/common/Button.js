// @flow
import * as React from 'react'

type Props = {
  children?: React.Element<*>,
  label?: string | React.Element<*>,
  style?: Object,
  color?: string,
  hoverdColor?: string,
  reverse?: boolean,
  onClick?: Function,
  onMouseEnter: (event: Event) => void,
  onMouseLeave: (event: Event) => void,
}

type State = {
  hoverd: boolean,
}

export default class Button extends React.Component<Props, State> {
  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  }

  state = { hoverd: false }

  handleMouseEnter = (event: Event) => {
    this.setState({ hoverd: true })
    this.props.onMouseEnter(event)
  }

  handleMouseLeave = (event: Event) => {
    this.setState({ hoverd: false })
    this.props.onMouseLeave(event)
  }

  render() {
    const { label, color, hoverdColor, children, reverse, onClick } = this.props

    const { hoverd } = this.state

    let buttonColor = color || '#fff'
    let buttonHoverdColor = hoverdColor || '#7898cf'
    const borderColor = buttonHoverdColor

    if (reverse) {
      ;[buttonColor, buttonHoverdColor] = [buttonHoverdColor, buttonColor]
    }

    const styles = {
      root: {
        margin: 0,
        padding: '12px 17px 10px',
        color: hoverd ? buttonColor : buttonHoverdColor,
        background: hoverd ? buttonHoverdColor : buttonColor,
        border: `1px solid ${borderColor}`,
        boxShadow: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        borderRadius: 20,
        fontSize: 13,
      },
    }

    const mergedStyle = { ...styles.root, ...this.props.style }

    return (
      <button
        style={mergedStyle}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={onClick}
      >
        {label || children}
      </button>
    )
  }
}
