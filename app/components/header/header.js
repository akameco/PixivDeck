// @flow
import React, {Component} from 'react'
import type {Manage} from '../../types'
import Icon from '../common/icon'
import Dropdwon from './dropdown'
import styles from './header.css'

type Props = {
	manage: Manage,
	onClickAdd: () => void,
	onToggleDropdown: () => void,
	onOpenSearchModal: () => void,
	onOpenFilterModal: () => void,
	onLogout: () => void
};

export default class Header extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.manage.isDropdown !== nextProps.manage.isDropdown
	}

	render() {
		return (
			<header className={styles.header}>
				<div className={styles.top}>
					<a className={styles.button} onClick={this.props.onClickAdd}>
						<Icon type="add"/>
					</a>
					<a className={styles.button} onClick={this.props.onOpenSearchModal}>
						<Icon type="searchIllust"/>
					</a>
				</div>
				<div className={styles.bottom}>
					<a onClick={this.props.onToggleDropdown}>
						<Icon type="setting"/>
					</a>
				</div>
				{this.props.manage.isDropdown &&
					<Dropdwon
						onLogout={this.props.onLogout}
						onOpenFilterModal={this.props.onOpenFilterModal}
						/>
				}
			</header>
		)
	}
}
