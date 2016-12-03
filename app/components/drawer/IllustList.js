// @flow
import React from 'react'
import type {Illust} from '../../types'
import Loading from '../common/Loading'
import Box from '../box'

type Props = {
	illusts: Array<Illust>,
};

const styles = {
	height: '100%',
	minHeight: '1500px',
	backgroundColor: '#222426',
}

const IllstList = ({illusts}: Props) => {
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
			{List}
		</div>
	)
}

export default IllstList
