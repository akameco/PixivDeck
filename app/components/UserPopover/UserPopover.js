// @flow
import React from 'react'
import Avater from '../common/Avater'
import type {User} from '../../types/user'
import type {Illust} from '../../types/illust'
import FollowButton from '../FollowButton'
import Profile from '../box/header/Profile'
import styles from './UserPopover.css'

export type Props = {
	onClick: () => void;
	illusts: Array<Illust>;
	user: User;
};

const UserPopover = ({user, onClick, illusts}: Props) => {
	const Images = illusts.map(v =>
		<img
			key={v.id}
			src={v.imageUrls.squareMedium}
			width={150}
			height={150}
			/>
		)
	return (
		<div className={styles.wrap}>
			<div className={styles.top}>
				<div className={styles.topRight}>
					<Avater src={user.profileImageUrls.medium} onClick={onClick} size={48}/>
					<Profile name={user.name} onClick={onClick} style={{color: '#222'}}/>
				</div>
				<FollowButton user={user}/>
			</div>
			<div className={styles.images}>
				{Images}
			</div>
		</div>
	)
}

export default UserPopover
