// @flow
import {connect} from 'react-redux'
import type {Connector} from 'react-redux'
import type {User} from '../../types/user'
import {follow, unFollow} from '../../actions'
import FollowButton from './FollowButton'
import type {Props} from './FollowButton'

type OwnProps = {user: User}

const mapDispatchToProps = (dispatch: Dispatch, {user}) => ({
	onClick() {
		if (user.isFollowed) {
			dispatch(unFollow(user.id))
		} else {
			dispatch(follow(user.id))
		}
	},
})

const connector: Connector<OwnProps, Props> = connect(null, mapDispatchToProps)
export default connector(FollowButton)
