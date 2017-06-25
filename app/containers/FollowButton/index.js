// @flow
import { connect, type Connector } from 'react-redux'
import type { User } from 'types/user'
import { folllowRequest, unFolllowRequest } from './actions'
import FollowButton, { type Props } from './FollowButton'

type OwnProps = { user: User }

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    if (user.isFollowed) {
      dispatch(unFolllowRequest(user.id))
    } else {
      dispatch(folllowRequest(user.id))
    }
  },
})

const connector: Connector<OwnProps, Props> = connect(null, mapDispatchToProps)
export default connector(FollowButton)
