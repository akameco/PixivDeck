// @flow
import React, {Component} from 'react'
import EventListener from 'react-event-listener'
import keycode from 'keycode'
import CloseButton from '../common/CloseButton'
import styles from './ModalWrapper.css'

type Props = {
	open: bool,
	onRequestClose?: () => void,
	children?: React$Element<any>,
	onClose: () => void,
};

export default class ModalWrapper extends Component {
	props: Props;
	_content: typeof Component;

	handleOverlayClick = (event: any) => {
		let node = event.target

		// モーダル内をクリックしたときは閉じない
		while (node) {
			if (node === this._content) {
				return
			}
			node = node.parentNode
		}

		this.props.onClose()
	}

	requestClose(buttonClicked: bool) {
		this.props.onClose()
		const {onRequestClose} = this.props
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
		const {
			onClose,
			children,
			open,
		} = this.props

		if (!open) {
			return null
		}

		return (
			<div className={styles.wrap} onClick={this.handleOverlayClick}>
				{open &&
					<EventListener
						target="window"
						onKeyUp={this.handleKeyUp}
						/>
				}
				<div
					className={styles.modal}
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this._content = c
					}}
					>
					<CloseButton onClick={onClose}/>
					{open && children}
				</div>
			</div>
		)
	}
}
