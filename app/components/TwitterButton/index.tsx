import * as React from 'react'
import Button from 'components/common/Button'
import { A } from './styles'

const TwitterButton = ({ url }: { url: string }) => {
  return (
    <A href={url} target="_blank">
      <Button label="Twitter" />
    </A>
  )
}

export default TwitterButton
