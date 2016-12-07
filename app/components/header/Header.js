// @flow
import React from 'react'
import SearchField from '../SearchField'
import HeaderButton from './HeaderButton'
import HeaderBottom from './HeaderBottom'
import styles from './Header.css'

type Props = {
	isDropdown: bool,
	isSearchField: bool,
	toggleSearchField: () => void,
	onClickAdd: () => void,
	onToggleDropdown: () => void,
	onOpenFilterModal: () => void,
	onLogout: () => void
};

export default class Header extends React.PureComponent {
	props: Props;

	render() {
		const {
			onClickAdd,
			onToggleDropdown,
			onLogout,
			onOpenFilterModal,
			isDropdown,
		} = this.props

		const {isSearchField, toggleSearchField} = this.props

		return (
			<header className={styles.header}>
				<div className={styles.top}>
					<HeaderButton iconType="add" onClick={onClickAdd}/>
					<HeaderButton
						iconType="searchIllust"
						onClick={toggleSearchField}
						IconStyle={isSearchField ? {color: '#dedede'} : {}}
						/>
				</div>
				{isSearchField && (
					<div className={styles.search}>
						<SearchField/>
					</div>
				)}
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
