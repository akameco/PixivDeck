// @flow
import React, {Component} from 'react'
import CloseButton from '../common/CloseButton'
import styles from './modal.css'

type Props = {
	children?: typeof Component,
	onClose: () => void,
};

export default class ModalWrapper extends Component {
	props: Props;
	_content: Component<*, *, *>;

	handleOverlayClick = (event: any) => {
		let node = event.target

		while (node) {
			if (node === this._content) {
				return
			}
			node = node.parentNode
		}

		this.props.onClose()
	}

	handleCloseClick = () => {
		this.props.onClose()
	};

	render() {
		return (
			<div className={styles.wrap} onClick={this.handleOverlayClick}>
				<div
					className={styles.modal}
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this._content = c
					}}
					>
					<CloseButton onClick={this.handleCloseClick}/>
					{this.props.children}
				</div>
			</div>
		)
	}
}
