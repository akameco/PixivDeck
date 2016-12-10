// @flow
import React from 'react'
import ClearIcon from 'material-ui/svg-icons/content/clear'
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
		<ClearIcon style={iconStyle}/>
	</a>
)

export default CloseButton
