// @flow
import React from 'react'
import { SortablePane, Pane } from 'react-sortable-pane'
import Column from 'containers/ColumnContainer'

export type Props = {
  names: Array<string>,
}

const Table = ({ names }: Props) => {
  const handleOnResize = () => null

  if (names.length === 0) {
    return null
  }

  const panes = names.map(id =>
    <Pane
      key={id}
      width={300}
      id={id}
      height="100%"
      isResizable={{ x: false, y: false, xy: false }}
    >
      <Column id={id} />
    </Pane>
  )

  return (
    <SortablePane disableEffect onResize={handleOnResize}>
      {panes}
    </SortablePane>
  )
}

export default Table
