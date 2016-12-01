// @flow
import React from 'react'
import type {Illust} from '../../types'
import Box from '../box'

type Props = {
	illusts: Array<Illust>,
};

export function IllstList({illusts}: Props) {
	const List = illusts.map(illust => (
		<Box
			key={illust.id}
			user={illust.user}
			illust={illust}
			/>
		)
	)
	return (
		<div style={{height: '100%', minHeight: '1500px', backgroundColor: '#222426'}}>
			{List}
		</div>
	)
}
