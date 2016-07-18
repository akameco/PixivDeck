// @flow
import {connect} from 'react-redux';
import type {Dispatch, State} from '../../types';
import {toggleDropdown, openModal} from '../../actions/manage';
import Header from './header';

function mapStateToProps(state: State) {
	return {manage: state.manage};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		onClickAdd: () => dispatch(openModal()),
		onToggleDropdown: () => dispatch(toggleDropdown()),
		onOpenSearchModal: () => dispatch(openModal('SEARCH'))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
