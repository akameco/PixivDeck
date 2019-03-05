import * as React from 'react'
import { link } from 'autolinker'

interface Props {
  text: string
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
