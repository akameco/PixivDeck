import React from 'react'
import styled from 'styled-components'
import Box from '../box'
import Infinite from '../common/Infinite'

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
		<Wrap onMouseDown={handleMove} onTouchStart={handleMove}>
			<Infinite
				root={root}
				onIntersect={onIntersect}
				targetRef={targetRef}
				>
				{List}
			</Infinite>
		</Wrap>
	)
}

const Wrap = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(100% - 50px);
`

export default ColumnContent
