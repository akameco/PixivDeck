// @flow
import {connect} from 'react-redux';
import type {Dispatch, State} from '../../types';
import {
	logout,
	toggleDropdown,
	openModal
 } from '../../actions/manage';
import Header from './header';

function mapStateToProps(state: State) {
	return {manage: state.manage};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onLogout: () => dispatch(logout()),
		onClickAdd: () => dispatch(openModal()),
		onToggleDropdown: () => dispatch(toggleDropdown()),
		onOpenSearchModal: () => dispatch(openModal('SEARCH')),
		onOpenFilterModal: () => dispatch(openModal('FILTER_TAG'))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
