// @flow
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import Header, { type Props } from 'components/header/Header'
import { logout } from '../LoginModal/actions'
import { openModal } from '../ModalManeger/actions'
import { toggleSearchField, closeSearchField, toggleDropdown } from './actions'
import {
  makeSelectisOpenDropdown,
  makeSelectisOpenSearchField,
} from './selectors'

const mapStateToProps = createStructuredSelector({
  isDropdown: makeSelectisOpenDropdown(),
  isSearchField: makeSelectisOpenSearchField(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogout() {
    dispatch(logout())
  },
  onClickAdd() {
    dispatch(openModal('AddColumn'))
  },
  onToggleDropdown() {
    dispatch(toggleDropdown())
  },
  onOpenFilterModal() {
    dispatch(openModal('Setting'))
  },
  toggleSearchField() {
    dispatch(toggleSearchField())
  },
  closeSearchField() {
    dispatch(closeSearchField())
  },
})

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Header)
