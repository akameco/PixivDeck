// @flow
import React, {Component} from 'react';
import css from 'react-css-modules';
import type {Manage} from '../../types';
import {AddIcon, SearchIcon, SettingsIcon} from '../icon';
import Dropdwon from './dropdown';
import styles from './header.css';

type Props = {
	manage: Manage,
	onClickAdd: () => void,
	onToggleDropdown: () => void,
	onOpenSearchModal: () => void,
	onOpenFilterModal: () => void,
	onLogout: () => void
};

@css(styles)
export default class Header extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.manage.isDropdown !== nextProps.manage.isDropdown;
	}

	render() {
		return (
			<header styleName="header">
				<div styleName="top">
					<a styleName="add" onClick={this.props.onClickAdd}>
						<AddIcon/>
					</a>
					<a styleName="search" onClick={this.props.onOpenSearchModal}>
						<SearchIcon/>
					</a>
				</div>
				<div styleName="bottom">
					<a onClick={this.props.onToggleDropdown}>
						<SettingsIcon/>
					</a>
				</div>
				{this.props.manage.isDropdown &&
					<Dropdwon
						onLogout={this.props.onLogout}
						onOpenFilterModal={this.props.onOpenFilterModal}
						/>
				}
			</header>
		);
	}
}
