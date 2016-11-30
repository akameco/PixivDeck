// @flow
import {shell} from 'electron'
import React from 'react'
import {link} from 'autolinker'
import Avater from '../common/avater'
import type {
	User,
	Profile,
} from '../../types'
import Pixiv from '../../repo/pixiv'
import Button from '../common/button'
import AddColumnButton from './AddColumnButton'

const headerStyle = {
	root: {
		backgroundColor: '#eee',
		paddingBottom: '30px',
	},
	imgWrap: {
		position: 'relative',
		width: '100%',
		height: '100%',
		margin: '20px auto',
		textAlign: 'center',
	},
	info: {
		textAlign: 'center',
	},
	caption: {
		backgroundColor: '#fff',
		borderRudias: '2px',
		margin: '10px 20px',
		padding: '10px 20px',
		lineHeight: '21px',
		fontSize: '14px',
	},
}

export default function Header({user, profile}: {user: User, profile: Profile}) {
	return (
		<div style={headerStyle.root}>
			<Navgation user={user} profile={profile}/>
			<div style={headerStyle.imgWrap}>
				<Avater img={user.profileImageUrls.medium} imgStyle={{width: '140px', height: '140px'}}/>
			</div>
			<div style={headerStyle.info}>
				<h1>{user.name}</h1>
			</div>
			<div style={headerStyle.caption}>
				<span
					dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
						__html: link(user.comment),
					}}
					/>
			</div>
		</div>
	)
}

const navgationStyle = {
	root: {
		width: '100%',
		position: 'flex',
		left: 'auto',
		transform: 'translateZ(0)',
		height: 50,
		top: 0,
		zIndex: 10,
	},
	wrap: {
		display: 'flex',
		textAlign: 'left',
		justifyContent: 'flex-end',
		padding: '10px',
	},
}

function Navgation({user, profile}: {user: User, profile: Profile}) {
	const follow = async () => {
		await Pixiv.userFollowAdd(user.id)
	}

	const unFollow = async () => {
		await Pixiv.userFollowDelete(user.id)
	}

	return (
		<div style={navgationStyle.root}>
			<div style={navgationStyle.wrap}>
				{profile.twitterUrl && <TwitterButton url={profile.twitterUrl}/>}
				<FollowButton follow={follow} unFollow={unFollow} isFollowed={user.isFollowed}/>
				<AddColumnButton user={user}/>
			</div>
		</div>
	)
}

function TwitterButton({url}: {url: string}) {
	const onClick = () => shell.openExternal(url)
	return (
		<a style={{margin: '0 10px'}} onClick={onClick}>
			<Button text="twitter"/>
		</a>
	)
}

type FollowButtonProps = {
	follow: () => Promise<void>;
	unFollow: () => Promise<void>;
	isFollowed: bool
};

function FollowButton({follow, unFollow, isFollowed}: FollowButtonProps) {
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
