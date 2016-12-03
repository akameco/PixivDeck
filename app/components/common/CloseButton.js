// @flow
import React from 'react'
import Icon from '../common/icon'
import styles from './CloseButton.css'

type Props = {
	style?: Object,
	iconStyle?: Object,
	onClick: () => void
};

const CloseButton = ({onClick, style, iconStyle}: Props) => (
	<a
		className={styles.closeButton}
		onClick={onClick}
		style={style}
		>
		<Icon type="close" style={iconStyle}/>
	</a>
)

export default CloseButton
