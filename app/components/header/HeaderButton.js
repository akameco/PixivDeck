import React from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'

const A = styled.a`
	display: block;
	width: 80%;
	height: 45px;
	margin: 0 auto;
`

type Props = {
	iconType: 'add' | 'searchIllust' | 'setting',
	onClick: () => void,
	IconStyle: Object,
}

const HeaderButton = ({iconType, onClick, IconStyle}: Props) => {
	const handleClick = (evnet: Event) => {
		evnet.stopPropagation()
		onClick()
	}
	const style = {color: '#a4a4a4', ...IconStyle}
	return (
		<A onClick={handleClick}>
			<Icon type={iconType} size={38} style={style}/>
		</A>
	)
}

export default HeaderButton
