// @flow
import React from 'react'
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

export default function Column({
  column,
  onClose,
  children,
  onClickHeader,
}: Props) {
  const { title, id, minBookmarks } = column
  return (
    <ColumnRoot>
      <ColumnHeader name={title} onClose={onClose} onTopClick={onClickHeader}>
        <ColumnSetting id={id} minBookmarks={minBookmarks} />
      </ColumnHeader>
      {children}
    </ColumnRoot>
  )
}
