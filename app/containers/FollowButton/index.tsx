import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { User } from 'types/user'
import { followRequest, unFollowRequest } from './actions'
import FollowButton, { Props } from './FollowButton'

interface OwnProps {
  user: User
}

const mapDispatchToProps = (dispatch: Dispatch, { user }) => ({
  onClick() {
    if (user.isFollowed) {
      dispatch(unFollowRequest(user.id, 'public'))
    } else {
      dispatch(followRequest(user.id, 'public'))
    }
  },
})

const connector = connect(
  null,
  mapDispatchToProps
)
export default connector(FollowButton)
