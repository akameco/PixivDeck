// @flow
import React from 'react'
import {link} from 'autolinker'
import Avater from '../common/Avater'
import type {User, Profile} from '../../types/user'
import Navigation from './Navigation'
import styles from './DrawerHeader.css'

const Header = ({user, profile}: {user: User, profile: Profile}) => (
	<div className={styles.root}>
		<Navigation user={user} profile={profile}/>
		<div className={styles.imgWrap}>
			<Avater src={user.profileImageUrls.medium} size={140}/>
		</div>
		<div className={styles.info}>
			<h1>{user.name}</h1>
		</div>
		<div className={styles.caption}>
			<span
				dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
					__html: link(user.comment),
				}}
				/>
		</div>
	</div>
)

export default Header
