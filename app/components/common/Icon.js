// @flow
import * as React from 'react'

type IconType =
  | 'setting'
  | 'manga'
  | 'searchIllust'
  | 'add'
  | 'close'
  | 'visible-off'
  | 'favorite'

type Props = {
  type: IconType,
  viewBox?: string,
  size?: number,
  className?: string,
  color?: string,
  hoverColor?: string,
  style?: Object,
  onMouseEnter: (event: Event) => void,
  onMouseLeave: (event: Event) => void,
}

const SelectIcon = ({ type }: { type: IconType }) => {
  switch (type) {
    case 'setting':
      return (
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      )
    case 'manga':
      return (
        <path d="M10 18h5v-6h-5v6zm-6 0h5v-13h-5v13zm12 0h5v-6h-5v6zm-6-13v6h11v-6h-11z" />
      )
    case 'searchIllust':
      return (
        <path d="M15.5 14h-.79l-.28-.27c.98-1.14 1.57-2.62 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
      )
    case 'add':
      return <path d="M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z" />
    case 'close':
      return (
        <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
      )
    case 'visible-off':
      return (
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16c.57-.23 1.18-.36 1.83-.36zm-10-2.73l2.28 2.28.46.46c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      )
    case 'favorite':
      return (
        <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
      )
    default:
      throw new Error('icon not match')
  }
}

export default class Icon extends React.PureComponent<
  Props,
  { hoverd: boolean }
> {
  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    size: 24,
  }

  state: { hoverd: boolean } = { hoverd: false }

  handleMouseEnter = (event: Event) => {
    this.setState({ hoverd: true })
    this.props.onMouseEnter(event)
  }

  handleMouseLeave = (event: Event) => {
    this.setState({ hoverd: false })
    this.props.onMouseLeave(event)
  }

  render() {
    const {
      type,
      style,
      color,
      hoverColor,
      viewBox,
      size,
      className,
    } = this.props

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
        className={className}
      >
        <g>
          <SelectIcon type={type} />
        </g>
      </svg>
    )
  }
}
