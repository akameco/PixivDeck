// @flow
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import EventListener from 'react-event-listener'
import keycode from 'keycode'
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
  _content: typeof Component

  requestClose(buttonClicked: boolean) {
    this.props.onClose()
    const { onRequestClose } = this.props
    if (onRequestClose) {
      onRequestClose(buttonClicked)
    }
  }

  handleKeyUp = (event: Event) => {
    if (keycode(event) === 'esc') {
      this.requestClose(false)
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
        <Content
          innerRef={c => {
            // eslint-disable-line react/jsx-no-bind
            this._content = c
          }}
        >
          <CloseButton onClick={onClose} />
          {open && children}
        </Content>
        <Overlay show={open} style={{ zIndex: 800 }} onClick={onClose} />
      </Wrap>
    )
  }
}
