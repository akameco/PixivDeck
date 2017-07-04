// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import LoginModal, { type Props } from 'components/LoginModal'
import type { Dispatch } from 'types'
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

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(LoginModal)
