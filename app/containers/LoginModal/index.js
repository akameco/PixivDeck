// @flow
import { connect, type Connector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import type { Dispatch } from 'types'
import { loginRequest } from './actions'
import LoginModal from './LoginModal'
import type { Props } from './LoginModal'
import {
  makeSelectIsLoading,
  makeSelectIsLoginFailure,
  makeSelectPassword,
  makeSelectUsername,
} from './selectors'

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  isLoading: makeSelectIsLoading(),
  isLoginFailure: makeSelectIsLoginFailure(),
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
