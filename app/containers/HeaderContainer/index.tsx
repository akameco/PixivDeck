import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Dispatch } from 'types'
import Header, { Props } from 'components/Sidebar'
import { logout } from '../LoginModal/actions'
import { openModal } from '../ModalManeger/actions'
import {
  toggleSearchField,
  closeSearchField,
  toggleDropdown,
  closeDropdown,
} from './actions'
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

  onCloseDropdown() {
    dispatch(closeDropdown())
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

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(Header)
