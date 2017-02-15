// @flow
import React from 'react'
import type {Illust} from 'types/illust'
import Loading from 'components/Loading'
import Infinite from 'components/common/Infinite'
import Box from 'components/Box'

export type Props = {
	illusts: Illust[],
	onIntersect: () => void,
}

const styles = {
	height: '100%',
	minHeight: '1500px',
	backgroundColor: '#222426',
}

const IllstList = ({illusts, onIntersect}: Props) => {
	const List = illusts.map(illust => (
		<Box
			key={illust.id}
			user={illust.user}
			illust={illust}
			/>
		)
	)
	if (illusts.length === 0) {
		return <Loading wrapStyle={styles}/>
	}
	return (
		<div style={styles}>
			<Infinite onIntersect={onIntersect}>
				{List}
			</Infinite>
		</div>
	)
}

export default IllstList
