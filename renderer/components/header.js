// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import styles from './header.css';
import {SettingsIcon} from './icon';

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
				<div styleName="bottom">
					<a styleName="setting" onClick={this.handleAddClick}>
						<SettingsIcon/>
					</a>
				</div>
			</header>
		);
	}
}

export default cssModules(Header, styles);
