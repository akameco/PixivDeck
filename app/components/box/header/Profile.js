import React from 'react'
import styles from './Profile.css'

type Props = {
	name: string,
	account: string,
	onClick: () => void,
};

const Profile = ({name, account, onClick}: Props) => (
	<div>
		<div className={styles.Profile}>
			<p className={styles.profileAreaLine}>
				<a className={styles.name} onClick={onClick}>{name}</a>
				<a className={styles.account} onClick={onClick}>{account}</a>
			</p>
		</div>
	</div>
)

export default Profile
