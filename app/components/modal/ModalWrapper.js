// @flow
import React, {Component} from 'react'
import CloseButton from '../common/CloseButton'
import styles from './ModalWrapper.css'

type Props = {
	children?: typeof Component,
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

	render() {
		const {onClose, children} = this.props
		return (
			<div className={styles.wrap} onClick={this.handleOverlayClick}>
				<div
					className={styles.modal}
					ref={c => { // eslint-disable-line react/jsx-no-bind
						this._content = c
					}}
					>
					<CloseButton onClick={onClose}/>
					{children}
				</div>
			</div>
		)
	}
}
