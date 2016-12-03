// @flow
import React from 'react'
import styles from './dropdown.css'

type Props = {
	onOpenFilterModal: () => void,
	onLogout: () => void
};

const Dropdwon = ({onOpenFilterModal, onLogout}: Props) => (
	<div className={styles.base}>
		<ul>
			<li>
				<a onClick={onOpenFilterModal}>
					設定
				</a>
			</li>
			<li className={styles.h}/>
			<li>
				<a onClick={onLogout}>
					ログアウト
				</a>
			</li>
		</ul>
	</div>
)

export default Dropdwon
