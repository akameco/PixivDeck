// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './modal.css';

type Props = {
	children: typeof Component,
	onClose: () => void,
	img: string
};

class Modal extends Component {
	props: Props;
	_content: Component<*, *, *>;

	handleOverlayClick = event => {
		let node = event.target;

		while (node) {
			if (node === this._content) {
				return;
			}
			node = node.parentNode;
		}

		this.props.onClose();
	}

	handleCloseClick = (event: Event) => {
		event.preventDefault();
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
						<span>title</span>
						<a styleName="close" onClick={this.handleCloseClick}>
							<i></i>
						</a>
					</header>
					<h1>hello</h1>
					<p>
						hollo
						hollo
						hollo
						hollo
						hollo
						hollo
					</p>
				</div>
			</div>
		);
	}
}

export default cssModules(Modal, styles);
