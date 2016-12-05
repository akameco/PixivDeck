// @flow
import React from 'react'
import Icon from '../../common/Icon'
import styles from './BookmarkButton.css'

type Props = {
	isBookmarked: bool
};

const BookmarkButton = ({isBookmarked}: Props) => {
	const color = isBookmarked ? '#b94343' : '#777'
	return (
		<div className={styles.wrap}>
			<Icon size={16} type="favorite" color={color}/>
		</div>
	)
}

export default BookmarkButton
