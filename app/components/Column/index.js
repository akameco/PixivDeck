// @flow
import React from 'react'
import styled from 'styled-components'
import type { ColumnType } from 'types/column'
import ColumnRoot from 'components/ColumnRoot'
import ColumnHeader from 'components/ColumnHeader'
import ColumnSetting from 'containers/ColumnHeaderSetting'

type Props = {
  children?: React$Element<*>,
  column: ColumnType,
  onClose: () => void,
  onClickHeader: Event => void,
}

const View = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 50px);
`

export default function Column({
  column,
  onClose,
  children,
  onClickHeader,
}: Props) {
  const { title, id, minBookmarks } = column

  const handleMove = (e: Event) => {
    e.stopPropagation()
  }

  return (
    <ColumnRoot>
      <ColumnHeader name={title} onClose={onClose} onTopClick={onClickHeader}>
        <ColumnSetting id={id} minBookmarks={minBookmarks} />
      </ColumnHeader>

      <View onMouseDown={handleMove} onTouchStart={handleMove}>
        {children}
      </View>
    </ColumnRoot>
  )
}
