// @flow
import React, {Component} from 'react';
import cssModules from 'react-css-modules';
import {SettingsIcon} from '../icon';
import Dropdwon from './dropdown';
import styles from './header.css';

type Props = {
	onOpenModal: () => void,
	onLogout: () => void
};

class Header extends Component {
	props: Props;
	state: {
		isDropdown: bool
	}

	constructor(props: Props) {
		super(props);
		this.state = {isDropdown: false};
	}

	handleAddClick = (event: Event) => {
		event.preventDefault();
		this.props.onOpenModal();
	}

	handleDropdown = () => {
		this.setState({isDropdown: !this.state.isDropdown});
	}

	handleClose = () => {
		this.setState({isDropdown: false});
	}

	handleLogout = () => {
		this.props.onLogout();
	}

	render() {
		return (
			<header styleName="base">
				<a styleName="add" onClick={this.handleAddClick}>
					<i></i>
				</a>
				<div styleName="bottom">
					<a styleName="setting" onClick={this.handleDropdown}>
						<SettingsIcon/>
					</a>
				</div>
				{this.state.isDropdown &&
					<Dropdwon
						onClose={this.handleClose}
						onLogout={this.props.onLogout}
						/>
				}
			</header>
		);
	}
}

export default cssModules(Header, styles);
