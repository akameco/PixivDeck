// @flow
import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './close-button.css';

type Props = {
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
			<a styleName="close" onClick={this.handleCloseClick}>
				<i></i>
			</a>
		);
	}
}
