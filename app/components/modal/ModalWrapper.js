// @flow
import React, {Component} from 'react'
import EventListener from 'react-event-listener'
import keycode from 'keycode'
import CloseButton from '../common/CloseButton'
import Overlay from '../common/Overlay'
import styles from './ModalWrapper.css'

type Props = {
	open: bool,
	onRequestClose?: () => void,
	children?: React$Element<any>,
	onClose: () => void,
}

export default class ModalWrapper extends Component {
	props: Props;
	_content: typeof Component;

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
			<div className={styles.root}>
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
				<Overlay
					show={open}
					style={{zIndex: 800}}
					onClick={onClose}
					/>
			</div>
		)
	}
}
