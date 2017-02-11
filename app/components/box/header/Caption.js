// @flow
import React from 'react'
import styled from 'styled-components'
import {link} from 'autolinker'

const renderLink = (text: string) => (
	<span
		dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
			__html: link(text),
		}}
		/>
)

const Wrapper = styled.div`
	color: #c4c4c4;
	width: calc(100% - 10px);
	line-height: 1.2rem;
	font-size: 0.85rem;
	margin-bottom: 10px;
	padding: 0 5px;
	a {
		color: #51769f;
	}
`

type Props = {
	caption: string,
}

const Caption = ({caption}: Props) => (
	<Wrapper>
		{renderLink(caption)}
	</Wrapper>
)

export default Caption
