// @flow
import {connect} from 'react-redux'
import type {Dispatch, State} from '../../types'
import {
	logout,
	toggleDropdown,
	openModal,
 } from '../../actions'
import Header from './header'

const mapStateToProps = ({manage: {isDropdown}}: State) => (
	{isDropdown}
)

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onLogout: () => dispatch(logout()),
		onClickAdd: () => dispatch(openModal()),
		onToggleDropdown: () => dispatch(toggleDropdown()),
		onOpenSearchModal: () => dispatch(openModal('SEARCH')),
		onOpenFilterModal: () => dispatch(openModal('FILTER_TAG')),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
