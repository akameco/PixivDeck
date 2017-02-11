// @flow
import React from 'react'
import styles from './Tag.css'

type Props = {
	onClick: (tag: string) => void,
	name: string
}

const Tag = ({name, onClick}: Props) => {
	const handleClick = () => onClick(name)
	return (
		<a onClick={handleClick} className={styles.tag}>
			#{name}
		</a>
	)
}

export default Tag
