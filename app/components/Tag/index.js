// @flow
import React from 'react'
import { StyledTag } from './styles'

export type Props = {
  onClick: (tag: string) => void,
  name: string,
}

export default function Tag({ name, onClick }: Props) {
  return (
    <StyledTag onClick={() => onClick(name)}>
      #{name}
    </StyledTag>
  )
}
