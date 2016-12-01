// @flow
import React from 'react'
import {connect} from 'react-redux'
import Pixiv from '../../repo/pixiv'
import Button from '../common/button'

type Props = {
	follow: () => void,
	unFollow: () => void,
	isFollowed: bool
};

function FollowButton({isFollowed, follow, unFollow}: Props) {
	if (isFollowed) {
		return (
			<a onClick={unFollow}>
				<Button text="フォロー解除"/>;
			</a>
		)
	}
	return (
		<a onClick={follow}>
			<Button text="フォロー"/>;
		</a>
	)
}

export default connect()(FollowButton)
