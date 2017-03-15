// @flow
import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import EventListener from 'react-event-listener';
import keycode from 'keycode';
import Overlay from 'components/Overlay';
import CloseButton from 'components/common/CloseButton';

type Props = {
  open: boolean,
  onRequestClose?: () => void,
  children?: React$Element<any>,
  onClose: () => void,
};

export default class ModalWrapper extends Component {
  props: Props;
  _content: typeof Component;

  requestClose(buttonClicked: boolean) {
    this.props.onClose();
    const {onRequestClose} = this.props;
    if (onRequestClose) {
      onRequestClose(buttonClicked);
    }
  }

  handleKeyUp = (event: Event) => {
    if (keycode(event) === 'esc') {
      this.requestClose(false);
    }
  };

  render() {
    const {
      onClose,
      children,
      open,
    } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Wrap>
        {open && <EventListener target="window" onKeyUp={this.handleKeyUp} />}
        <Content
          innerRef={c => {
            // eslint-disable-line react/jsx-no-bind
            this._content = c;
          }}>
          <CloseButton onClick={onClose} />
          {open && children}
        </Content>
        <Overlay show={open} style={{zIndex: 800}} onClick={onClose} />
      </Wrap>
    );
  }
}

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: fixed;
	align-content: center;
	box-sizing: border-box;
	top: 0;
	left: 0;
	z-index: 700;
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
		margin-top: -1000px;
	}

	20% {
		opacity: 100;
	}
	100% {
		margin-top: 0;
	}
`;

const Content = styled.div`
	z-index: 900;
	position: relative;
	background: #f5f5f5;
	max-width: 90%;
	max-height: 90%;
	width: auto;
	height: auto;
	overflow-y: hidden;
	box-shadow: 0 0 10px rgba(17, 17, 17, 0.5);
	border-radius: 3px;
	padding-top: 10px;
	padding-bottom: 15px;
	animation: ${fadeIn} 0.2s ease-out 0.1s both;
`;
