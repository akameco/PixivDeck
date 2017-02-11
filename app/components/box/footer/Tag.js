// @flow
import React from 'react'
import styled from 'styled-components'

const TagWrapper = styled.a`
	color: #5d89a8;
	margin-left: 5px;
	cursor: pointer;
`

type Props = {
	onClick: (tag: string) => void,
	name: string
}

const Tag = ({name, onClick}: Props) => {
	const handleClick = () => onClick(name)
	return (
		<TagWrapper onClick={handleClick}>
			#{name}
		</TagWrapper>
	)
}

export default Tag
