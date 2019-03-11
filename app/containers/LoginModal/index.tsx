import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import LoginModal, { Props } from 'components/LoginModal'
import { Dispatch } from 'types'
import { loginRequest } from './actions'
import * as selectors from './selectors'

const mapStateToProps = createStructuredSelector({
  username: selectors.makeSelectUsername(),
  password: selectors.makeSelectPassword(),
  isLoading: selectors.makeSelectIsLoading(),
  isLoginFailure: selectors.makeSelectIsLoginFailure(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick(username, password) {
    dispatch(loginRequest(username, password))
  },
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
export default connector(LoginModal)
