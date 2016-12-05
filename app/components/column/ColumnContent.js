import React from 'react'
import Box from '../box'
import Infinite from '../common/Infinite'
import styles from './ColumnContent.css'

type ColumnContentType = {
	target: any,
	onIntersect: () => void,
	illusts: Array<Illust>,
};

const ColumnContent = ({target, onIntersect, illusts}: ColumnContentType) => {
	const handleMove = (e: Event) => {
		e.stopPropagation()
	}

	const List = illusts.map(illust =>
		<Box key={illust.id} illust={illust}/>
	)

	return (
		<div className={styles.content} onMouseDown={handleMove} onTouchStart={handleMove}>
			<Infinite
				root={target}
				onIntersect={onIntersect}
				>
				{List}
			</Infinite>
		</div>
	)
}

export default ColumnContent
