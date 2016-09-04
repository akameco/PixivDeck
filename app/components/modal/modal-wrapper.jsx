// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import {CloseButton} from '../button/';
import styles from './modal.css';

type Props = {
	children?: any,
	onClose: () => void,
};

@css(styles)
export default class ModalWrapper extends Component {
	props: Props;
	_content: Component<*, *, *>;

	handleOverlayClick = (event: any) => {
		let node = event.target;

		while (node) {
			if (node === this._content) {
				return;
			}
			node = node.parentNode;
		}

		this.props.onClose();
	}

	handleCloseClick = () => {
		this.props.onClose();
	};

	render() {
		return (
			<div styleName="wrap" onClick={this.handleOverlayClick}>
				<div
					styleName="modal"
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this._content = c;
					}}
					>
					<CloseButton onClick={this.handleCloseClick}/>
					{this.props.children}
				</div>
			</div>
		);
	}
}
