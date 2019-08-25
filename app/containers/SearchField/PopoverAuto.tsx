import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import Popover, { Item } from './Popover'
import messages from './messages'

interface Props {
  value: string
  keywords: string[]
  onClick: (word: string) => undefined
}

const PopoverAuto = ({ value, keywords, onClick }: Props) => {
  const list = keywords.map(keyword => {
    const handleClick = () => onClick(keyword)

    const start = keyword.slice(0, value.length)
    const end = keyword.slice(value.length)
    return <Item key={keyword} onClick={handleClick} start={start} end={end} />
  })
  return (
    <Popover title={<FormattedMessage {...messages.search} />}>{list}</Popover>
  )
}

export default PopoverAuto
