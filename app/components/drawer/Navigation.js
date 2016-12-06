// @flow
import {shell} from 'electron'
import React from 'react'
import Button from '../common/button'
import type {User, Profile} from '../../types/user'
import AddColumnButton from './AddColumnButton'
import styles from './Navigation.css'

type Props = {
	user: User,
	profile: Profile,
	follow: (id: number) => void,
	unFollow: (id: number) => void
};

const Navigation = ({user, profile, follow, unFollow}: Props) => {
	const {id} = user
	const props = {
		follow() {
			follow(id)
		},
		unFollow() {
			unFollow(id)
		},
	}

	return (
		<div className={styles.root}>
			<div className={styles.wrap}>
				{profile.twitterUrl && <TwitterButton url={profile.twitterUrl}/>}
				<FollowButton isFollowed={user.isFollowed} {...props}/>
				<AddColumnButton user={user}/>
			</div>
		</div>
	)
}

export default Navigation

const TwitterButton = ({url}: {url: string}) => {
	const onClick = () => shell.openExternal(url)
	return (
		<a style={{margin: '0 10px'}} onClick={onClick}>
			<Button text="twitter"/>
		</a>
	)
}

type FollowButtonProps = {
	follow: () => void;
	unFollow: () => void;
	isFollowed: bool
};

const FollowButton = ({follow, unFollow, isFollowed}: FollowButtonProps) => {
	if (isFollowed) {
		return (
			<a onClick={unFollow}>
				<Button style={{color: '#fff', backgroundColor: '#529ecc'}} text="フォロー解除"/>
			</a>
		)
	}
	return (
		<a onClick={follow}>
			<Button text="フォロー"/>
		</a>
	)
}
