import React from 'react'
import Box from '../box'
import Infinite from '../common/Infinite'
import styles from './ColumnContent.css'

type Props = {
	root: any,
	targetRef?: (c: Component<*, *, *>) => void,
	onIntersect: () => void,
	illusts: Array<Illust>,
}

const ColumnContent = ({root, onIntersect, illusts, targetRef}: Props) => {
	const handleMove = (e: Event) => {
		e.stopPropagation()
	}

	const List = illusts.map(illust =>
		<Box key={illust.id} illust={illust}/>
	)

	return (
		<div
			className={styles.content}
			onMouseDown={handleMove}
			onTouchStart={handleMove}
			>
			<Infinite
				root={root}
				onIntersect={onIntersect}
				targetRef={targetRef}
				>
				{List}
			</Infinite>
		</div>
	)
}

export default ColumnContent
