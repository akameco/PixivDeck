// @flow
import {connect} from 'react-redux';
import type {Connector} from 'react-redux';
import type {Dispatch, State} from 'types';
import {
  logout,
  toggleDropdown,
  openModal,
  toggleSearchField,
  closeSearchField,
} from 'actions';
import Header from './header';
import type {Props} from './header';

const mapStateToProps = ({manage: {isDropdown, isSearchField}}: State) => ({
  isDropdown,
  isSearchField,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
  onClickAdd() {
    dispatch(openModal());
  },
  onToggleDropdown() {
    dispatch(toggleDropdown());
  },
  onOpenFilterModal() {
    dispatch(openModal('FILTER_TAG'));
  },
  toggleSearchField() {
    dispatch(toggleSearchField());
  },
  closeSearchField() {
    dispatch(closeSearchField());
  },
});

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default connector(Header);
