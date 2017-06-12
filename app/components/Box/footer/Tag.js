// @flow
import React from 'react'
import styled from 'styled-components'
import A from 'components/A'

const StyledTag = styled(A)`
	margin-left: 5px;
	cursor: pointer;
`

type Props = {
  onClick: (tag: string) => void,
  name: string,
}

const Tag = ({ name, onClick }: Props) =>
  <StyledTag onClick={() => onClick(name)}>
    #{name}
  </StyledTag>

export default Tag
