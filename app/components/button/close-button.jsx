// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import Icon from '../icon';
import styles from './close-button.css';

type Props = {
	style?: Object,
	iconStyle?: Object,
	className?: string,
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
				className={this.props.className}
				style={this.props.style}
				>
				<Icon type="close" style={this.props.iconStyle}/>
			</a>
		);
	}
}
