import React from 'react'
import Icon from '../common/Icon'
import styles from './HeaderButton.css'

type Props = {
	iconType: 'add' | 'searchIllust' | 'setting',
	onClick: () => void,
};

const HeaderButton = ({iconType, onClick}: Props) => (
	<a className={styles.button} onClick={onClick}>
		<Icon type={iconType} size={38}/>
	</a>
)

export default HeaderButton
