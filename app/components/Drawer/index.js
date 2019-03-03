// @flow
import * as React from 'react'
import EventListener from 'react-event-listener'
import handleEscCreater from 'utils/handleEscCreater'
import Overlay from 'components/Overlay'
import StyledDrawer from './StyledDrawer'
import DrawerWrapper from './DrawerWrapper'

export type Props = {
  open: boolean,
  children?: React.Element<any>,
  onRequestClose?: () => void,
  width?: number,
}

type DefaultProps = {
  width: number,
}

class Drawer extends React.PureComponent<Props, void> {
  props: Props

  static defaultProps: DefaultProps = {
    width: 500,
    onRequestClose: () => {},
  }

  handleKeyUp =
    this.props &&
    this.props.onRequestClose &&
    handleEscCreater(this.props.onRequestClose)

  render() {
    const { open, width, children, onRequestClose } = this.props

    return (
      <DrawerWrapper>
        {open && <EventListener target="window" onKeyUp={this.handleKeyUp} />}
        <StyledDrawer open={open} x={width}>
          {open && children}
        </StyledDrawer>
        <Overlay show={open} style={{ zIndex: 800 }} onClick={onRequestClose} />
      </DrawerWrapper>
    )
  }
}

export default Drawer
