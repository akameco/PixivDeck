// @flow
import React from 'react'
import IconBase, { type Props } from './IconBase'

export default function MangaIcon(props: Props) {
  return (
    <IconBase {...props}>
      <path d="M10 18h5v-6h-5v6zm-6 0h5v-13h-5v13zm12 0h5v-6h-5v6zm-6-13v6h11v-6h-11z" />
    </IconBase>
  )
}
