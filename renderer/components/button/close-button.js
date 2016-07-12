// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './close-button.css';

type Props = {
	onClick: () => void
};

class CloseButton extends Component {
	props: Props;

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

export default cssModules(CloseButton, styles);
