// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './header.css';

type Props = {
	onOpenModal: () => void
};

class Header extends Component {
	props: Props;

	handleAddClick = (event: Event) => {
		event.preventDefault();
		this.props.onOpenModal();
	}

	render() {
		return (
			<header styleName="base">
				<a styleName="add" onClick={this.handleAddClick}>
					<i></i>
				</a>
			</header>
		);
	}
}

export default cssModules(Header, styles);
