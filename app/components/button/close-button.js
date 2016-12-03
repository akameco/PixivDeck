// @flow
import React, {Component} from 'react'
import Icon from '../common/icon'
import styles from './close-button.css'

type Props = {
	style?: Object,
	iconStyle?: Object,
	onClick: () => void
};

export default class CloseButton extends Component {
	props: Props;

	shouldComponentUpdate() {
		return false
	}

	handleCloseClick = () => {
		this.props.onClick()
	}

	render() {
		return (
			<a
				className={styles.closeButton}
				onClick={this.handleCloseClick}
				style={this.props.style}
				>
				<Icon type="close" style={this.props.iconStyle}/>
			</a>
		)
	}
}
