// @flow
import React, { Component } from 'react'
import EventListener from 'react-event-listener'
import handleEscCreater from 'services/handleEscCreater'
import Overlay from 'components/Overlay'
import CloseButton from 'components/common/CloseButton'
import { Content, Wrap } from './sytles'

type Props = {
  open: boolean,
  onRequestClose?: Function,
  children?: React$Element<*>,
  onClose: Function,
}

export default class ModalWrapper extends Component {
  props: Props
  node: HTMLElement

  requestClose = () => {
    this.props.onClose()
    const { onRequestClose } = this.props
    if (onRequestClose) {
      onRequestClose(false)
    }
  }

  handleKeyUp = handleEscCreater(this.requestClose)

  setNode = (node: HTMLElement) => {
    this.node = node
  }

  render() {
    const { onClose, children, open } = this.props

    if (!open) {
      return null
    }

    return (
      <Wrap>
        {open && <EventListener target="window" onKeyUp={this.handleKeyUp} />}
        <Content innerRef={this.setNode}>
          <CloseButton onClick={onClose} />
          {open && children}
        </Content>
        <Overlay show={open} style={{ zIndex: 800 }} onClick={onClose} />
      </Wrap>
    )
  }
}
