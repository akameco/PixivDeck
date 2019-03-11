import * as React from 'react'
import Popover, { Item } from './Popover'

interface Props {
  value: string
  onClick: (word: string) => undefined
}

const UsersOver = ({ value, onClick }: Props) => {
  const bookmarkNumbers = [100, 500, 1000, 3000, 5000, 10000]
  const list = bookmarkNumbers.map(v => {
    const handleClick = () => onClick(`${value}${v}users入り`)

    return (
      <Item key={v} onClick={handleClick} start={value} end={`${v}users入り`} />
    )
  })
  return <Popover title="users入り">{list}</Popover>
}

export default UsersOver
