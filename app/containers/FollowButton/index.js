// @flow
import { connect, type Connector } from 'react-redux'
import type { User } from 'types/user'
import { followRequest, unFollowRequest } from './actions'
import FollowButton, { type Props } from './FollowButton'

type OwnProps = { user: User }

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    if (user.isFollowed) {
      dispatch(unFollowRequest(user.id))
    } else {
      dispatch(followRequest(user.id))
    }
  },
})

const connector: Connector<OwnProps, Props> = connect(null, mapDispatchToProps)
export default connector(FollowButton)
