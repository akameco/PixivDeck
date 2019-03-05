import * as React from 'react'
import { StyledTag } from './styles'

export interface Props {
  onClick: (a: string) => undefined
  name: string
}
export default function Tag({ name, onClick }: Props) {
  return <StyledTag onClick={() => onClick(name)}>#{name}</StyledTag>
}
