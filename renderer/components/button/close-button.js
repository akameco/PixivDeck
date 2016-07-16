// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './close-button.css';

type Props = {
	style?: Object,
	onClick: () => void
};

@CSSModules(styles)
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
				styleName="close"
				onClick={this.handleCloseClick}
				style={this.props.style}
				>
				<i></i>
			</a>
		);
	}
}
