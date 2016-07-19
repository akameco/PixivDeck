// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import {CloseIcon} from '../icon';
import styles from './close-button.css';

type Props = {
	style?: Object,
	onClick: () => void
};

@css(styles)
export default class CloseButton extends Component {
	props: Props;

	shouldComponentUpdate() {
		return false;
	}

	handleCloseClick = () => {
		this.props.onClick();
	}

	render() {
		return (
			<a
				styleName="closeButton"
				onClick={this.handleCloseClick}
				style={this.props.style}
				>
				<CloseIcon/>
			</a>
		);
	}
}
