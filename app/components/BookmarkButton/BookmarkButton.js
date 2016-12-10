// @flow
import React from 'react'
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'

const styles = {
	icon: {
		width: 16,
		height: 16,
	},
}

const hoverColor = '#b94343'

type Props = {
	isBookmarked: bool
};

const BookmarkButton = ({isBookmarked}: Props) => {
	const color = isBookmarked ? hoverColor : '#777'
	return (
		<IconButton
			iconStyle={styles.icon}
			>
			<FavoriteIcon color={color} hoverColor={hoverColor}/>
		</IconButton>
	)
}

export default BookmarkButton
