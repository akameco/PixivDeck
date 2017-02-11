import React from 'react'
import styles from './Profile.css'

type Props = {
	name: string,
	onClick: () => void,
}

const Profile = ({name, onClick}: Props) => (
	<div className={styles.Profile}>
		<p className={styles.profileAreaLine}>
			<a className={styles.name} onClick={onClick}>{name}</a>
		</p>
	</div>
)

export default Profile
