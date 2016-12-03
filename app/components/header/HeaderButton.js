import React from 'react'
import Icon from '../common/icon'
import styles from './HeaderButton.css'

type Props = {
	iconType: 'add' | 'searchIllust' | 'setting',
	onClick: () => void,
};

const HeaderButton = ({iconType, onClick}: Props) => (
	<a className={styles.button} onClick={onClick}>
		<Icon type={iconType}/>
	</a>
)

export default HeaderButton
