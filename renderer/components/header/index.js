// @flow
import React, {Component} from 'react';
import type {Dispatch} from 'redux';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import type {Manage} from '../../actions/type';
import {
	closeDropdown,
	toggleDropdown,
	openModal,
	logout
} from '../../actions/manage';
import {SettingsIcon} from '../icon';
import Dropdwon from '../dorpdown';
import styles from './header.css';

type Props = {
	manage: Manage,
	dispatch: Dispatch
};

@CSSModules(styles)
class Header extends Component {
	props: Props;

	shouldComponentUpdate(nextProps) {
		return this.props.manage.isDropdown !== nextProps.manage.isDropdown;
	}

	handleAddClick = () => {
		this.props.dispatch(openModal());
	}

	handleDropdown = () => {
		this.props.dispatch(toggleDropdown());
	}

	handleClose = () => {
		this.props.dispatch(closeDropdown());
	}

	handleLogout = () => {
		this.props.dispatch(logout());
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
				{this.props.manage.isDropdown &&
					<Dropdwon
						onClose={this.handleClose}
						onLogout={this.handleLogout}
						/>
				}
			</header>
		);
	}
}

function mapStateToProps(state) {
	return {manage: state.manage};
}

export default connect(mapStateToProps)(Header);
