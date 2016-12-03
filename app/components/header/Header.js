// @flow
import React, {Component} from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
import styles from './Header.css'

type Props = {
	isDropdown: bool,
	onClickAdd: () => void,
	onToggleDropdown: () => void,
	onOpenSearchModal: () => void,
	onOpenFilterModal: () => void,
	onLogout: () => void
};

export default class Header extends Component {
	props: Props;

	shouldComponentUpdate(nextProps: Props) {
		return this.props.isDropdown !== nextProps.isDropdown
	}

	render() {
		const {
			onClickAdd,
			onOpenSearchModal,
			onToggleDropdown,
			onLogout,
			onOpenFilterModal,
			isDropdown,
		} = this.props

		return (
			<header className={styles.header}>
				<HeaderTop onClickAdd={onClickAdd} onOpenSearchModal={onOpenSearchModal}/>
				<HeaderBottom
					isDropdown={isDropdown}
					onLogout={onLogout}
					onToggleDropdown={onToggleDropdown}
					onOpenFilterModal={onOpenFilterModal}
					/>
			</header>
		)
	}
}
