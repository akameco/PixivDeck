// @flow
import React from 'react'
import {CloseButton} from '../button'
import styles from './ColumnHeader.css'

type Props = {
	title: string,
	onTopClick: (event: Event) => void,
	onClose: () => void
};

const ColumnHeader = ({title, onClose, onTopClick}: Props) => (
	<header className={styles.header}>
		<a className={styles.title} onClick={onTopClick}>
			{title}
		</a>
		<CloseButton onClick={onClose}/>
	</header>
)

export default ColumnHeader
