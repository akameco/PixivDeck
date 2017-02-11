// @flow
import {shell} from 'electron'
import React from 'react'
import Button from '../common/Button'
import type {User, Profile} from '../../types/user'
import FollowButton from '../FollowButton'
import AddColumnButton from './AddColumnButton'
import styles from './Navigation.css'

type Props = {
	user: User,
	profile: Profile,
}

const Navigation = ({user, profile}: Props) => {
	return (
		<div className={styles.root}>
			<div className={styles.wrap}>
				{profile.twitterUrl && <TwitterButton url={profile.twitterUrl}/>}
				<FollowButton user={user}/>
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
			<Button label="twitter"/>
		</a>
	)
}
