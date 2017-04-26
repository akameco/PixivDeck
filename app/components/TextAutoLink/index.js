// @flow
import React from 'react'
import { link } from 'autolinker'

type Props = {
  text: string,
}

const TextAutoLink = ({ text }: Props) => (
  <span
    dangerouslySetInnerHTML={{
      // eslint-disable-line react/no-danger
      __html: link(text),
    }}
  />
)

export default TextAutoLink
