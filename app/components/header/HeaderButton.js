import React from 'react'
import Icon from '../common/Icon'
import styles from './HeaderButton.css'

type Props = {
	iconType: 'add' | 'searchIllust' | 'setting',
	onClick: () => void,
	IconStyle: Object,
};

const HeaderButton = ({iconType, onClick, IconStyle}: Props) => {
	const handleClick = (evnet: Event) => {
		evnet.stopPropagation()
		onClick()
	}
	return (
		<a className={styles.button} onClick={handleClick}>
			<Icon type={iconType} size={38} style={IconStyle}/>
		</a>
	)
}

export default HeaderButton
