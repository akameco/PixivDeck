// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {CloseButton} from '../button/';
import styles from './modal.css';

type Props = {
	children?: any,
	onClose: () => void,
	title: string
};

@CSSModules(styles)
export default class Modal extends Component {
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
			<div
				styleName="wrap"
				onClick={this.handleOverlayClick}
				>
				<div
					styleName="base"
					ref={c => {
						this._content = c;
					}}
					>
					<header>
						<h2>{this.props.title}</h2>
						<CloseButton onClick={this.handleCloseClick}/>
					</header>
					<div styleName="body">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
