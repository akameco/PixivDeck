// @flow
import {shell} from 'electron'
import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'

const A = styled.a`
	margin: 0 10px;
`

const TwitterButton = ({url}: {url: string}) => {
	const onClick = () => shell.openExternal(url)
	return (
		<A onClick={onClick}>
			<Button label="twitter"/>
		</A>
	)
}

export default TwitterButton
