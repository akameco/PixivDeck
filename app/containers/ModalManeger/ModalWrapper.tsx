import * as React from 'react'
import EventListener from 'react-event-listener'
import handleEscCreater from 'utils/handleEscCreater'
import Overlay from 'components/Overlay'
import CloseButton from 'components/common/CloseButton'
import { Content, Wrap } from './sytles'

interface Props {
  open: boolean
  onRequestClose?: Function
  children?: React.Node
  onClose: Function
}
export default class ModalWrapper extends React.Component<Props> {
  node: HTMLElement
  requestClose = () => {
    this.props.onClose()
    const { onRequestClose } = this.props

    if (onRequestClose) {
      onRequestClose(false)
    }
  }
  handleKeyUp = handleEscCreater(this.requestClose)
  setNode = (node: HTMLElement | null) => {
    if (node) {
      this.node = node
    }
  }

  render() {
    const { onClose, children, open } = this.props

    if (!open) {
      return null
    }

    return (
      <Wrap>
        {open && <EventListener target="window" onKeyUp={this.handleKeyUp} />}
        <Content ref={this.setNode}>
          <CloseButton onClick={onClose} />
          {open && children}
        </Content>
        <Overlay
          show={open}
          style={{
            zIndex: 800,
          }}
          onClick={onClose}
        />
      </Wrap>
    )
  }
}
