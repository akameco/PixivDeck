// @flow
import React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import ColumnManager from 'containers/ColumnManager'

export type Props = {
  ids: Array<string>,
}

const Table = ({ ids }: Props) => {
  const handleOnResize = () => null

  if (ids.length === 0) {
    return null
  }

  const panes = ids.map(id =>
    <Pane
      key={id}
      width={300}
      id={id}
      height="100%"
      isResizable={{ x: false, y: false, xy: false }}
    >
      <ColumnManager id={id} />
    </Pane>
  )

  return (
    <SortablePane disableEffect onResize={handleOnResize}>
      {panes}
    </SortablePane>
  )
}

export default Table
