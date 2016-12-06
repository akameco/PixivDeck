// @flow
import React from 'react'
import type {Illust} from '../../types/illust'
import type {DrawerType} from '../../types/drawer'
import Loading from '../common/Loading'
import Infinite from '../common/Infinite'
import Box from '../box'

type Props = {
	type: DrawerType,
	illusts: Illust[],
	onIntersect: (type: DrawerType) => void,
};

const styles = {
	height: '100%',
	minHeight: '1500px',
	backgroundColor: '#222426',
}

const IllstList = ({illusts, onIntersect, type}: Props) => {
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
	const handleIntersect = () => {
		onIntersect(type)
	}
	return (
		<div style={styles}>
			<Infinite onIntersect={handleIntersect}>
				{List}
			</Infinite>
		</div>
	)
}

export default IllstList
