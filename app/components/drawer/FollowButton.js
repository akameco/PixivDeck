// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {User} from '../../types';
import Pixiv from '../../repo/pixiv';
import Button from '../common/button';

type Props = {
	user: User,
	isFollowed: bool
};

function FollowButton({user, isFollowed}: Props) {
	const follow = async () => {
		await Pixiv.userFollowAdd(user.id);
	};

	const unFollow = async () => {
		await Pixiv.userFollowDelete(user.id);
	};

	if (isFollowed) {
		return (
			<a onClick={unFollow}>
				<Button text="フォロー解除"/>;
			</a>
		);
	}
	return (
		<a onClick={follow}>
			<Button text="フォロー"/>;
		</a>
	);
}

export default connect()(FollowButton);
