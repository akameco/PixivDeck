// @flow
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../types'
import {
	logout,
	toggleDropdown,
	openModal,
	toggleSearchField,
	closeSearchField,
 } from '../../actions'
import Header from './header'

const mapStateToProps = ({manage: {isDropdown, isSearchField}}: State) => (
	{
		isDropdown,
		isSearchField,
	}
)

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onLogout: () => dispatch(logout()),
		onClickAdd: () => dispatch(openModal()),
		onToggleDropdown: () => dispatch(toggleDropdown()),
		onOpenFilterModal: () => dispatch(openModal('FILTER_TAG')),
		toggleSearchField: () => dispatch(toggleSearchField()),
		closeSearchField: () => dispatch(closeSearchField()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
